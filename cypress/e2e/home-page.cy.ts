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
    it('should have a list of podcasts', () => {
      cy.intercept('GET', 'https://itunes.apple.com/search?term=podcast&media=podcast&limit=10').as('podcasts')
      cy.wait('@podcasts')
      cy.getByTestId('podcast-list').should('exist')
    })
  })
})
