class CheckoutPage {
    goingToCheckoutPage() {
        cy.get('[data-test="checkout"]').click();
    }
    addUserInfo(firstName, lastName, postCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postCode);
        cy.get('[data-test="continue"]').click();
    }
    finishPurchase() {
        cy.get('[data-test="finish"]').click();

    }
    purchaseCompleteAssertion() {
        cy.get('.complete-header').should('have.text', "Thank you for your order!");

    }
    cancelPurchase() {
        cy.get('[data-test="cancel"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }
    purchaseCancelAssertion() {
        cy.get('.title').should('have.text', "Products");

    }


}

export default CheckoutPage;