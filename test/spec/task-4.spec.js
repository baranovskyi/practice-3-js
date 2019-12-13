import chai from "chai";
import ShoppingCart from "../../src/task-4/task-4";
import phones from "../../src/task-4/phones.json";

const assert = chai.assert,
    phone1 = phones[0],
    phone2 = phones[1];

let cartEl, cart;

function createCartStub() {
    cartEl = document.createElement("div");

    cartEl.innerHTML = `
<div>
    <p class="empty-cart-message">Your cart is empty. Buy something!</p>
    <ul class="shopping-cart-list"></ul>

    Total: $<span class="total">0</span>
    <button class="remove-all d-none">Remove All!</button>
</div>`;

    cart = new ShoppingCart(cartEl);
}

describe("Task 4: Shopping Cart", () => {
    beforeEach(createCartStub);

    it("should show 'no items' message when there's no items in cart", () => {
        const el = cartEl.querySelector(".empty-cart-message");
        assert.isFalse(el.classList.contains("d-none"));

        cart.addItem(phone1);

        assert.isTrue(el.classList.contains("d-none"));

        cart.removeItem(phone1.id);

        assert.isFalse(el.classList.contains("d-none"));
    });

    it("should show 'remove all' button when there are items in cart", () => {
        const el = cartEl.querySelector(".remove-all");
        assert.isTrue(el.classList.contains("d-none"));

        cart.addItem(phone1);

        assert.isFalse(el.classList.contains("d-none"));

        cart.removeItem(phone1.id);

        assert.isTrue(el.classList.contains("d-none"));
    });

    it("should add and remove items to/from list", () => {
        assert.isTrue(cart.isCartEmpty());
        assert.isFalse(cart.isItemInCart(phone1.id));

        cart.addItem(phone1);

        assert.isFalse(cart.isCartEmpty());
        assert.isTrue(cart.isItemInCart(phone1.id));

        cart.removeItem(phone1.id);

        assert.isTrue(cart.isCartEmpty());
        assert.isFalse(cart.isItemInCart(phone1.id));
    });

    it("should have 'remove all' button which removes all items in cart", () => {
        cart.addItem(phone1);
        cart.addItem(phone1);
        cart.addItem(phone2);

        cartEl.querySelector(".remove-all").click();

        assert.isTrue(cart.isCartEmpty());
    });

    it("should have 'remove' button for each item in list", () => {
        cart.addItem(phone1);
        cart.addItem(phone2);
        cart.addItem(phone2);

        cartEl.querySelector(`button.remove[data-item-id="${phone2.id}"]`).click();

        assert.isTrue(cart.isItemInCart(phone1.id));
        assert.isFalse(cart.isItemInCart(phone2.id));
    });

    it("should have 'total' sum of all items in cart", () => {
        const totalEl = cartEl.querySelector("span.total");
        assert.equal(+totalEl.innerHTML, 0);

        cart.addItem(phone1);
        assert.equal(+totalEl.innerHTML, phone1.price);

        cart.addItem(phone1);
        assert.equal(+totalEl.innerHTML, phone1.price * 2);

        cart.addItem(phone2);
        assert.equal(+totalEl.innerHTML, phone1.price * 2 + phone2.price);

        cart.removeAll();

        assert.equal(+totalEl.innerHTML, 0);
    });
});
