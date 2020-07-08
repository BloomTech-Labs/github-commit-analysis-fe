describe('Graphics show up on tabs', () => {
    it('shows issues comments graph', () => {
        cy.visit('localhost:3000')
        cy.contains('Login with GitHub').click()
        cy.contains('Kubernetes Issues Comments')
    })
})