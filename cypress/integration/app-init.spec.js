describe('App initialization', () => {
  it('Displays toDos from API on load', () => {

    cy.seedAndVisit()
    cy.get('.task-wrapper').should('have.length', 4)


  });
});
