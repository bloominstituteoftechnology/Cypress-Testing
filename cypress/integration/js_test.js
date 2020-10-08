describe("Test out form output", () =>{

    beforeEach(() =>{
        cy.visit("http://localhost:3000/")
    })


    it("visits our localhost", () => {
        cy.get('body').should('exist')
        // cy.get('form').should('contain', 'Volunteer Sign Up')
        // cy.get('[data-cy="name"]').type('ffa').should("have.value","ffa");
        // cy.get('[data-cy="email"]').type('ffa@frogs.com').should("have.value","ffa@frogs.com");    
        // cy.get('[data-cy="motivation"]').type('heresTxt').should("have.value","heresTxt");
        // cy.get('[data-cy="positions"]').select('Yard Work')
        // cy.get('[type=checkbox]').check().should("be.checked")
        
        // cy.get('[data-cy="submitted"]').click();
        // cy.screenshot('my-img-shotup');
        // cy.get('pre').should('exist')

        // cy.get('[data-cy="submit"]').type('Submit').should('have.value', 'Submit')
        
    });
    // cy.get('[data-cy="name"]')

});

