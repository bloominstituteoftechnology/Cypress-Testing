describe("Test out form output", () =>{

    beforeEach(() =>{
        cy.visit("http://localhost:3000/")
    })


    it("visits our localhost", () => {
        cy.get('body').should('exist');
         cy.get('h1').should('contain', 'Sign Up, Right-Now!');
        cy.get('[data-cy=name]').type('frank').should("have.value","frank");
        cy.get('[data-cy=password]').type('passwordfrank').should("have.value","passwordfrank");
        cy.get('[data-cy=email]').type('ffa@frogs.com').should("have.value","ffa@frogs.com");    
        // cy.get('[data-cy="motivation"]').type('heresTxt').should("have.value","heresTxt");
        // cy.get('[data-cy="positions"]').select('Yard Work')
        cy.get('[type=checkbox]').check().should("be.checked")
        
        cy.get('[data-cy=submited]').click();
        // cy.screenshot('my-img-shotup');
        // cy.get('pre').should('exist')

        // cy.get('[data-cy="submit"]').type('Submit').should('have.value', 'Submit')
        
    });
    // cy.get('[data-cy="name"]')

});

