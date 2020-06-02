describe('Cypress Test for Home Page on Heroku', () => {
    it('tests the GitStats Home Page is running on Heroku', () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
    });
    it('finds content Login with GitHub on the Home Page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
        cy.contains('Login with GitHub')
    });
    it('finds content Copyright on the Home Page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
        cy.contains('Copyright')
    });
    it('tests the home link on the home page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
        cy.contains('Home').click()
    });
    it('tests the about link on the home page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
        cy.contains('About').click()
    });
    it('tests whether the About link navigates to the About Page and sees Mission statement', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
        cy.contains('About').click()
        await cy.url().should('include', 'Mission')
    });
    it('tests the "Login with Github" button on the home page', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/')
        cy.contains('Login with GitHub').click()
        await cy.url('https://commit-analysis-be.herokuapp.com/auth/github/').should('include', 'Authorize')
    });
});
