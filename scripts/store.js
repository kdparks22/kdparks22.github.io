/*    Semester Project
      Bed & Breakfast
      Gift Shop | Store

      Author: Kylee Parks
      Date:   4/22/2026

      Filename: store.js
*/

function addToCart(name, price, idNum) {
    // 1. Get the values the user picked from the dropdowns
    const colorEl = document.getElementById('color-' + idNum);
	const sizeEl = document.getElementById('size-' + idNum);
	const qtyEl = document.getElementById('qty-' + idNum);

	const chosenColor = colorEl ? colorEl.value : "";
	const chosenSize = sizeEl ? sizeEl.value : "";
	const chosenQty = qtyEl ? parseInt(qtyEl.value) : 1;

    // 2. Get the current cart from storage
    let cart = getCart();

    // 3. Check if the exact same item (name, color, and size) is already in the cart
    let existingItem = cart.find(item => 
        item.name === name && 
        item.color === chosenColor && 
        item.size === chosenSize
    );

    if (existingItem) {
        // If it exists, just add the new quantity to the existing quantity
        existingItem.qty = parseInt(existingItem.qty) + chosenQty;
    } else {
        // If it doesn't exist, create the new item object and push it
        const newItem = {
			id: idNum,
            name: name,
            price: price,
            color: chosenColor,
            size: chosenSize,
            qty: chosenQty
        };
        cart.push(newItem);
    }

    // 4. Save and alert
    saveCart(cart);
    alert(chosenQty + " " + name + " (" + chosenColor + " " + chosenSize + ") added to cart!");
}

function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}