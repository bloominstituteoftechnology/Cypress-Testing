describe("Testing form inputs ", ()=>{  // i can use context instead of describe

    // this will go back to local host before every test
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    });

    it('adding text to our input and submit the form ',  () =>{
       cy.get('[data-cy="title"]')
           .type("ehsan ")
           .should('have.value',"ehsan ")
        cy.get('[data-cy=body]')
            .type("this is the first test that I am writing")
            .should('have.value',"this is the first test that I am writing")
        cy.get('[data-cy=email]')
            .type("test@gmail.com")
            .should('have.value',"test@gmail.com")
        cy.get('[data-cy=password]')
            .type("password123")
            .should('have.value',"password123")
        cy.get('[data-cy=terms]')
            .check()
            .should('be.checked' )
        cy.get('[data-cy="submit"]').click()
    });
} )
