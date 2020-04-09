describe('Form renders', function () {
  it('Form submits  correctly', function () {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy=name]').type('John Dave')
    cy.get('[data-cy=email]').type('john@email.com')
    cy.get('[data-cy=password]').type('password1234')
    cy.get('[data-cy=tos]').check()
    cy.get('[data-cy=submit]').click()

    cy.get('.userContainer').should('be.visible')
  })
})