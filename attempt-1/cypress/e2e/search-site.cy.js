describe('test search in site', () => {
  it('search "tickets"', () => {
    cy.visit('https://rockinrio.com/rio/pt-br/home/');
    cy.get('#dropdownMenuButton').trigger('mouseover');
    cy.get('#menu-item-14207 > a').click();
    cy.contains('INGRESSOS 2022');
  })
})