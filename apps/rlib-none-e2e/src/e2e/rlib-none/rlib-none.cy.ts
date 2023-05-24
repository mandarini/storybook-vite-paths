describe('rlib-none: RlibNone component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rlibnone--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to RlibNone!');
  });
});
