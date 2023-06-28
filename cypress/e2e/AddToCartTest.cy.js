import LoginPage from "../pages/LoginPage"
import AddToCart from "../pages/AddToCart"
import CheckoutPage from "../pages/CheckoutPage"

describe("Product Purchase", () => {
    const loginPage = new LoginPage();
    const addToCart = new AddToCart();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        cy.viewport(1920, 1080);
        loginPage.userLogin("standard_user", "secret_sauce");
    })

    it("verify product purchase is successful", () => {
        addToCart.userInDashbord();
        addToCart.viewProduct();
        addToCart.addingToCart();
        addToCart.cartPage();
        checkoutPage.goingToCheckoutPage();
        checkoutPage.addUserInfo("Towfik", "islam", "8522");
        checkoutPage.finishPurchase();
        checkoutPage.purchaseCompleteAssertion();


    })
    it("verify product purchase is cancelled", () => {
        addToCart.userInDashbord();
        addToCart.viewProduct();
        addToCart.addingToCart();
        addToCart.cartPage();
        checkoutPage.goingToCheckoutPage();
        checkoutPage.addUserInfo("Towfik", "islam", "8522");
        checkoutPage.cancelPurchase();
        checkoutPage.purchaseCancelAssertion();


    })
})