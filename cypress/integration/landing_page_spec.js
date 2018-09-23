/* TODO: None of these tests should not be relying on any users in the actual DB */
describe('Landing page', () => {
  beforeEach(() => cy.visit('/'));

  it('can log in existing user', () => {
    // Fill in user credentials
    cy.get('.expanded-login')
      .children('form')
      .within(() => {
        cy.get('input[name="email"]').type('test@example.org');
        cy.get('input[name="password"]').type('superSecret123');
      });

    // Log in
    cy.get('.expanded-login')
      .children('form')
      .get('button[type="submit"]')
      .click();

    // Redirected sucessfully
    cy.url().should('include', '/dashboard');
  });

  it('can register new user', () => {
    // Switch the form to show the sign up form
    cy.contains('Sign Up')
      .click()
      .get('.expanded-signup');

    // Fill in all inputs
    cy.get('.expanded-signup')
      .children('form')
      .within(() => {
        cy.get('input[name="firstName"]').type('Ariana');
        cy.get('input[name="firstName"]').should('have.value', 'Ariana');

        cy.get('input[name="lastName"]').type('Johnson');
        cy.get('input[name="lastName"]').should('have.value', 'Johnson');

        cy.get('input[name="email"]').type('email@example.org');
        cy.get('input[name="email"]').should('have.value', 'email@example.org');

        cy.get('input[name="password"]').type('secretPassword');
        cy.get('input[name="password"]').should('have.value', 'secretPassword');
      });

    // Submit the form
    cy.get('.expanded-signup')
      .children('form')
      .get('button[type="submit"]')
      .click();

    // TODO: Should be redirected to '/dashboard/dashboard'?
  });
});
