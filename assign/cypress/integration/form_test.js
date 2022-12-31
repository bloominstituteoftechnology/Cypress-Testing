// write tests here
describe('Quotes App', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000');
    })

    // Getters to cut down on typing
    const first_nameInput = () => cy.get('input[name=first_name]');
    const last_nameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
    const roleDropdown = () => cy.get ('select[name=role]');
    const tosRadio = () => cy.get ('input[name=termsOfService]');

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })

    it('the proper elements are showing', () => {
        first_nameInput().should('exist');
        last_nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');    
        roleDropdown().should('exist');  
        tosRadio().should('exist');   
        // cy.contains('Submit').should('exist');
        cy.contains(/submit/i).should('exist');
    })

    describe('Filling out the inputs and cancelling', () => {
        // We can use optional describe blocks to organize and group our tests
        // Can we navigate to the url
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        // submit button should start out disabled
        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        // type in the inputs
        it('can type in the inputs', () => {
            first_nameInput()
                .should('have.value', '')
                .type('Peter rox!')
                .should('have.value', 'Peter rox!');
            last_nameInput()
                .should('have.value', '')
                .type('Not Peter')
                .should('have.value', 'Not Peter');
            emailInput()
                .should('have.value', '')
                .type('p@p.com')
                .should('have.value', 'p@p.com');
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password');
            roleDropdown()                
                .select('')
                .should('have.value', 'Select an option');

        })

        
    })
    
})