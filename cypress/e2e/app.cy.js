/// <reference types="cypress" />
describe("one test spec", () => {
  it("one test", () => {
    cy.visit("http://localhost:8080");
    cy.get("#button-1").should("have.text", "not clicked");
  });
});
