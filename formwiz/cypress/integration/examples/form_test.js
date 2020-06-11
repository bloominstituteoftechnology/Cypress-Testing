describe("Form testing our form inputs", function(){
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    it("adds text into the inputs and submits form", function() {
        cy.get('[data-cy="name"]').type("Dusty").should("have.value", "Dusty");
        cy.get('[data-cy="email"]').type("Example@example.com").should("have.value", "Example@example.com");
        cy.get('[data-cy="password"]').type("Passy123").should("have.value", "Passy123");
        cy.get('[data-cy="gender"]').select("Male").should("have.value", "Male");
        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.get("[data-cy='submit']").click();
    });
});