class AddToCart {
    userInDashbord() {
        cy.get('.title').should('have.text', "Products");
    }
    viewProduct() {
        cy.get('#item_4_title_link > .inventory_item_name').click();
    }
    addingToCart() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    cartPage() {
        cy.get('.shopping_cart_link').click();
    }


}

export default AddToCart;