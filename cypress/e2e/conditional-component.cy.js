/// <reference types="cypress" />
it("Tests the conditional component", () => {
  cy.visit("http://localhost:8080");
  cy.get("p").should("have.text", "Component A");
});
