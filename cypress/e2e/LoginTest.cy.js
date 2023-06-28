import LoginPage from "../pages/LoginPage"


describe("Testing Login Funtionality", () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.viewport(1920, 1080);
    })

    it("test With invalid credential", () => {
        loginPage.userLogin("standarduser", "secret_sauce");
        loginPage.invalidAssertion();
    })

    it("test With valid credential", () => {
        loginPage.userLogin("standard_user", "secret_sauce");
    })
})