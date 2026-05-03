/*    Semester Project
      Bed & Breakfast
      Gift Shop | Cart

      Author: Kylee Parks
      Date:   4/22/2026

      Filename: cart.js
*/

function renderCart() {
    const cart = getCart();
    const display = document.getElementById('cart-area');
	// Find the Shipping Page button in the navigation
    const shippingBtn = document.querySelector('a[href="shipping.html"]');

    display.innerHTML = "";
    let total = 0;

    // Check if cart is empty
    if (cart.length === 0) {
        if (shippingBtn) {
            shippingBtn.style.pointerEvents = "none";
            shippingBtn.style.opacity = "0.5";
        }
        const emptyMsg = document.createElement('div');
        emptyMsg.className = "empty-cart";
        emptyMsg.innerHTML = "<h3>Your cart is empty</h3><p>Go back to the store to add some items!</p>";
        display.appendChild(emptyMsg);
		
		// Hide or reset total if the element exists
        const totalBox = document.getElementById('total-box');
        if (totalBox) totalBox.textContent = "0.00";
        return;
    }

	// Enable the Shipping button if cart has items
    if (shippingBtn) {
        shippingBtn.style.pointerEvents = "auto";
        shippingBtn.style.opacity = "1";
    }

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const row = document.createElement('div');
        row.className = "cart-row";

        // 1. Name Display
        const title = document.createElement('strong');
        title.className = "cart-item-title";
        title.textContent = item.name;
        row.appendChild(title);

        // 2. Price Display
        const priceTag = document.createElement('span');
        priceTag.className = "cart-price";
        priceTag.textContent = "$" + parseFloat(item.price).toFixed(2);
        row.appendChild(priceTag);

		// 3. Color Changer

        // Color label
		const colorLabel = document.createElement('div');
		if (item.id === 2) {
			colorLabel.textContent = "Scent:";
		} else {
			colorLabel.textContent = "Color:";
		}
		row.appendChild(colorLabel);

        const colorSel = document.createElement('select');
        let colors;
        switch(item.id){
            case 1: // Flower Bouquet
                colors = ["Pink", "White", "Mixed"];
                break;
            case 2: // Candle
                colors = ["Lavender", "Rose"];
                break;
            case 3: // Tea
                colors = ["Chamomile, Lavender, & Lemon Balm"];
                break;
            case 4: // Mug
                colors = ["Black", "White"];
                break;
            case 5: // Seeds
                colors = ["Wildflower", "Rose", "Peony"];
                break;
            default:
                colors = [item.color];
        }

        colors.forEach(c => {
            const opt = document.createElement('option');
            opt.textContent = c;
            if (item.color && c.trim().toLowerCase() === item.color.trim().toLowerCase()) {
                opt.selected = true;
            }
            colorSel.appendChild(opt);
        });

        colorSel.onchange = function() { updateItem(i, 'color', colorSel.value); };
        row.appendChild(colorSel);

        // 4. Size Changer
        let sizes;
        switch(item.id){
            case 4: // Mug
                sizes = ["Medium"];
                break;

            case 5: // Seeds
                sizes = ["Small Pack", "Large Pack"];
                break;

            default:
                sizes = [];
        }

        if (sizes.length > 0) {
            const sizeLabel = document.createElement('div');
            sizeLabel.textContent = "Size:";
            row.appendChild(sizeLabel);
            const sizeSel = document.createElement('select');
            sizes.forEach(s => {
                const opt = document.createElement('option');
                opt.textContent = s;
                if (item.size && s === item.size) {
                    opt.selected = true;
                }
                sizeSel.appendChild(opt);
            });
            sizeSel.onchange = function() { updateItem(i, 'size', sizeSel.value); };
            row.appendChild(sizeSel);
        }

	
		// 5. Quantity Changer (with arrows)
		const qtyInput = document.createElement('input');
		qtyInput.type = "number";
		qtyInput.min = 1;
		qtyInput.max = 5;

		// Make sure value is valid
		qtyInput.value = item.qty ? item.qty : 1;
		qtyInput.onchange = function() {
			let value = parseInt(qtyInput.value);
			if (isNaN(value) || value < 1) value = 1;
			if (value > 5) value = 5;

			updateItem(i, 'qty', value);
		};
		row.appendChild(qtyInput);

        // 6. Remove Button
        const remBtn = document.createElement('button');
        remBtn.textContent = "Remove";
        remBtn.className = "remove-button action-button";
        remBtn.onclick = function() {
            cart.splice(i, 1);
            saveCart(cart);
            renderCart();
        };
        row.appendChild(remBtn);

        display.appendChild(row);
        total += (parseFloat(item.price) * parseInt(item.qty));
    }
    
    const totalBox = document.getElementById('total-box');
    if (totalBox) totalBox.textContent = total.toFixed(2);
}

function updateItem(index, field, newValue) {
    let cart = getCart();
    cart[index][field] = newValue; // Update the specific field (color, size, or qty)
    saveCart(cart);
    renderCart(); // Refresh to show new total
}