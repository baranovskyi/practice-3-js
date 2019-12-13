import phones from "./phones.json";
import ShoppingCart from "./task-4.js";

function getItemHtml(item) {
    return `
        <li>
            <div class="picture">
                <img src="${item.imageUrl}" />
            </div>
            <div class="description">
                <h4>${item.name}</h4>
                <p>${item.snippet}</p>
                <span class="price">$${item.price}</span>
                <button class="btn btn-sm btn-outline-success" data-item-id="${item.id}">Buy</button>
            </div>
        </li>`;
}

function getItemById(id) {
    return phones.find(item => item.id === id);
}

const phonesHtml = phones.map(getItemHtml).join(""),
    itemList = document.querySelector(".item-list"),
    cart = new ShoppingCart(document.getElementById("task4"));

itemList.innerHTML = `<ul>${phonesHtml}</ul>`;
itemList.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        cart.addItem(getItemById(e.target.dataset.itemId));
    }
});
