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

  context('Search', () => {
    it('should have a search input', () => {
      cy.getByTestId('search-input').should('exist')
    })

    it('should filter the podcasts by search input', () => {
      cy.getByTestId('search-input').type('joe')
      cy.getByTestId('podcast-item').should('have.lengthOf.at.least', 1)
    })
  })

  context('Podcast Page', ()=> {
    it('should navigate to podcast page when click on podcast item', () => {
      cy.getByTestId('podcast-item').first().click()
      cy.url().should('include', '/podcast/')
      cy.getByTestId('podcast-details').should('have.text', 'Podcast')
    })
  })

  context('Podcast Episode Page', ()=> {
    it('should navigate to podcast episode page when click on episode item', () => {
      cy.getByTestId('podcast-item').first().click()
      
      cy.intercept('GET', 'https://api.allorigins.win/get?url=*').as('getEpisodes')

      cy.wait('@getEpisodes')
      
      cy.getByTestId('episode-item').first().click()

      cy.url().should('include', '/episode/')
      cy.getByTestId('episode-details').should('have.text', 'Episode')
    })
  })
})
