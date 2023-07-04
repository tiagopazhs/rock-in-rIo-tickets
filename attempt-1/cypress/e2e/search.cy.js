describe('test search in google', () => {
  it('search "rock in rion"', () => {
    cy.visit('https://google.com');
    cy.get('#APjFqb').type('rockInRio 2024');
  })
})