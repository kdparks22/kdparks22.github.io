/*    Semester Project
      Bed & Breakfast
      Gift Shop | Storage

      Author: Kylee Parks
      Date:   4/22/2026

      Filename: common.js
*/

function getCart() {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
}

function saveCart(cartArray) {
    localStorage.setItem('cart', JSON.stringify(cartArray));
}