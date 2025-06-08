// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('tambahTTBC0', () => {
    const ban = ["1000-20", "Dunlop", "123", "Reparasi"];
    cy.contains('span', 'New').parent().find('.v-btn__content').click();
    cy.get('input[placeholder="Pilih ukuran"]').click({ force: true }).get('.v-overlay-container').contains(ban[0]).click();
    cy.get('input[placeholder="Pilih merek"]').click({ force: true }).get('.v-overlay-container').contains(ban[1]).click();
    cy.get('input[placeholder="No. Seri"]').first().type(ban[2]);
    cy.get('input[placeholder="Pilih tipe"]').click({ force: true }).get('.v-overlay-container').contains(ban[3]).click();
});
Cypress.Commands.add('tambahTTBC1', () => {
    const ban = ["1100-20", "Aspira", "321", "Claim"];
    cy.contains('span', 'New').parent().find('.v-btn__content').click();
    cy.get('input[placeholder="Pilih ukuran"]').click({ force: true }).get('.v-overlay-container').contains(ban[0]).click();
    cy.get('input[placeholder="Pilih merek"]').click({ force: true }).get('.v-overlay-container').contains(ban[1]).click();
    cy.get('input[placeholder="No. Seri"]').eq(1).type(ban[2]);
    cy.get('input[placeholder="Pilih tipe"]').click({ force: true }).get('.v-overlay-container').contains(ban[3]).click();
    cy.get('textarea[placeholder="Keterangan"]').first().click({ force: true }).type("Lorem ipsum dolor sit amet");
});
// cypress/support/commands.js
Cypress.Commands.add('login_sc', () => {
    cy.visit('https://admin.rubberman.timedoor-host.web.id', {
        headers: { 
        Authorization: `Basic dGltZWRvb3I6NEAwZ2FhJlNBSWcqdm8=`
    },timeout: 20000}).wait(500);
    cy.get('input[placeholder="Masukkan username"]').should('be.visible').type("rin_sc");
    cy.get('input[type="password"]').type("@[ERB]O6pG&G");
    cy.get('.v-btn__content').contains('Login').click();
});
Cypress.Commands.add('login_sp', () => {
    cy.visit('https://admin.rubberman.timedoor-host.web.id', {
        headers: { 
        Authorization: `Basic dGltZWRvb3I6NEAwZ2FhJlNBSWcqdm8=`
    },timeout: 20000}).wait(500);
    cy.get('input[placeholder="Masukkan username"]').should('be.visible').type("rin_sp");
    cy.get('input[type="password"]').type("@[ERB]O6pG&G");
    cy.get('.v-btn__content').contains('Login').click();
});