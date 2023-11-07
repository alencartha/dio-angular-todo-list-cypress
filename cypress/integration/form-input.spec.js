describe('Form input', () => {

  beforeEach(() => {
    cy.seedAndVisit()
  })

  it('Focuses the input on load', () => {
    cy.focused().should('have.id', 'title')
  })

  it('Accepts input', () => {
    const value = 'New ToDo'
    cy.get('#title').type(value).should('have.value', value)

  })


});
