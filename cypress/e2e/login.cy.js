/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Masukkan Email"]').should('be.visible');
    cy.get('input[placeholder="Masukkan Kata Sandi"]').should('be.visible');
    cy.get('button')
      .contains(/^Masuk$/)
      .should('be.visible');
  });
  it('should display alert when email is empty', () => {
    // klik tombol login tanpa mengisi email
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Masukkan Kata Sandi"]').type('markotest@email.com');

    // klik tombol login tanpa mengisi password
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when email and password are wrong', () => {
    // mengisi email
    cy.get('input[placeholder="Masukkan Email"]').type('markotest@markonah.com');

    // mengisi password yang salah
    cy.get('input[placeholder="Masukkan Kata Sandi"]').type('wrong_password');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // mengisi email
    cy.get('input[placeholder="Masukkan Email"]').type('marko123@markonah.com');

    // mengisi password
    cy.get('input[placeholder="Masukkan Kata Sandi"]').type('marko123');

    // menekan tombol Login
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('header').contains(/^Forum Diskusi App$/).should('be.visible');
    cy.get('nav').invoke('show')
    cy.get('button').contains('Logout').click();
  });
});
