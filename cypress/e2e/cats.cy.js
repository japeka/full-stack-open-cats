
/* eslint-disable no-undef */
describe('Cats', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Abyssinian')
    cy.contains('Aegan')
  })
  it('Abyssinian page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.get('a').eq(0).click()
    cy.contains('Home')
    cy.contains('Abyssinian')
    cy.contains('The Abyssinian')
    cy.contains('Active, Energetic')
  })
})
