describe('Testing form inputs', () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000 ');
    });

    it('adding inputs and submitting form ', () => {
        cy.get("[data-cy=name]") 
        .type('Lakendria').should("have.value","Lakendria")

        cy.get("[data-cy=email]") 
    .type('kendra939@gmail.com').should("have.value", "kendra939@gmail.com")

    cy.get("[data-cy=password]") 
    .type('dev1234.').should("have.value","dev1234.") 

    cy.contains('Terms') 
    .click()

    cy.contains('Submit') 
    .click()
    })
    
    });
