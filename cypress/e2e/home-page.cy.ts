describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Header', () => {
    it('should have a title', () => {
      cy.title().should('eq', 'Podcaster')
    })
  })

  context('Podcasts', () => {
    it('should have a list of podcasts and have 100 items', () => {
      cy.getByTestId('podcast-list').should('exist')
      cy.getByTestId('podcast-item').should('have.length', 100)
    })
  })
})
