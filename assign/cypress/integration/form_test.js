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
        // cy.contains('Submit Quote').should('exist');
        // cy.contains(/submit quote/i).should('exist');
    })
    
})