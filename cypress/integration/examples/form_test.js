describe("Application Form", () => {
    // here go our tests
    beforeEach(() => {
      // arbitrary code you want running before tests start
      cy.visit("http://localhost:54071/");
    });

const firstNameInput = () => cy.get('input[name="fname"]')
const lastNameInput = () => cy.get('input[lname="lname"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsBox = () => cy.get('input[type="checkbox"]')
const submitButton = () => cy.get('button[id="submitButton"]')

// describe('Application Form', () => {
    it('Allows submission after completion', () => {
        firstNameInput().type('Anthony')
        lastNameInput().type('Cortese')
        emailInput().type('anthonykcortese@gmail.com')
        passwordInput().type('password8457')
        termsBox().check()
        submitButton().should('not.be.disabled')
        submitButton().click()
    })
})
 
it("will show errors for invalid inputs", () => {
    firstNameInput().type("p");
    submitButton().should("be.disabled");

    nameInput().should("have.value, "Anthony");
    emailInput().type("anthonykcortese@gmail.com");
    nameInput().should("have.value, "Anthony");
    passwordInput.type("password8457");
    passwordInput().should("have.value", "password8457")
    termsBox().click()
})