/// <reference types="cypress" />
describe("one test spec", () => {
  it("one test", () => {
    cy.visit("http://localhost:8080");
    cy.get("button").should("have.text", "not clicked");
  });
});
