describe('rlib-vite: RlibVite component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rlibvite--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to RlibVite!');
  });
});
