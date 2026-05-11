/*    Semester Project
      Bed & Breakfast
      Gift Shop | Shipping

      Author: Kylee Parks
      Date:   4/22/2026

      Filename: shipping.js
*/

function initShippingPage() {
    displayShippingPage();
    const form = document.getElementById('shipping-form');
    if (form) form.addEventListener('submit', submitShippingForm);
}

function displayShippingPage() {
    const summaryBox = document.getElementById('shipping-summary');
    if (!summaryBox) return;

    const cart = getCart();
    let total = 0;

    // Build the HTML for each item in the summary
    let html = cart.map(item => {
        const itemTotal = parseFloat(item.price) * parseInt(item.qty);
        total += itemTotal;
        return `
            <div class="summary-line">
                <span>${item.name} (${item.size}, ${item.color}) x ${item.qty}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>`;
    }).join('');

    // Add the final total line
    html += `
        <div class="summary-line">
            <strong>Total</strong>
            <strong>$${total.toFixed(2)}</strong>
        </div>`;
        
    summaryBox.innerHTML = html;
}

function submitShippingForm(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();

    const messageBox = document.getElementById('shipping-message');

    // Clear old messages
    messageBox.innerHTML = "";

    // Validation checks

    // Name validation
    if (fullName.length < 2) {
        messageBox.innerHTML = `
            <div class="message-box error">
                Please enter a valid full name.
            </div>`;
        return;
    }

    // Address validation
    if (address.length < 5) {
        messageBox.innerHTML = `
            <div class="message-box error">
                Please enter a valid address.
            </div>`;
        return;
    }

    // City validation
    if (city.length < 2) {
        messageBox.innerHTML = `
            <div class="message-box error">
                Please enter a valid city.
            </div>`;
        return;
    }

    // State validation (2 letters)
    if (!/^[A-Za-z]{2}$/.test(state)) {
        messageBox.innerHTML = `
            <div class="message-box error">
                State must be 2 letters.
            </div>`;
        return;
    }

    // ZIP code validation (5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        messageBox.innerHTML = `
            <div class="message-box error">
                ZIP code must be 5 numbers.
            </div>`;
        return;
    }

    // Success message
    messageBox.innerHTML = `
        <div class="message-box">
            Order placed for ${fullName}!
        </div>`;

    // Clear cart
    localStorage.removeItem('cart');

    // Reset form
    event.target.reset();

    // Refresh summary
    displayShippingPage();
}