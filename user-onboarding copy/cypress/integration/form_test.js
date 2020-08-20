
describe('Team Builder App Test', () => {
    it('can navigate to http://localhost:3000//', () => {
        cy.visit('http://localhost:3000//')
        cy.url().should('include', 'localhost')
    })

    it('can type a name in the name input', () => {
        cy.get('input[name="name"]')
          .type('Michael Scott')
          .should('have.value', 'Michael Scott')
    })

    it('can type an email in the email input', () => {
        cy.get('input[name="email"]')
        .type('michaelscott@aol.com')
        .should('have.value', 'michaelscott@aol.com')
    })

    it('can type a password in the password input', () => {
        cy.get('input[name="password"]')
          .type('dundermifflin')
          .should('have.value', 'dundermifflin')
    })

    it('can check the t&c checkbox', () => {
        cy.get('input[name="termsOfService"]').click()
          .should('be.checked')
    })

    it('can choose a role', () => {
        cy.get('select[name="role"]')
          .select('Engineer')
    })

    it('can submit a user', () => {
        cy.get('button').click()
    })

    it('check that submit is enabled when full, but disabled if not', () => {
        cy.get('button').should('be.enabled') // enabled with full form
        cy.get('input[name="password"]').type(' ') // submit empty string 
        cy.get('button').should('be.disabled') // disabled
    })

    it('check that the get request is working', () => {
        beforeEach(() => {
            cy.request('https://reqres.in/api/users')
        })
    })
    
})