
/* eslint-disable no-undef */
describe('Cats', function() {
  it('front page can be opened', function() {
    cy.log('created new user 2')
    cy.visit('http://localhost:5000')
    cy.log('created new user 3')
    cy.contains('Abyssinian')
    cy.contains('Aegean')
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
