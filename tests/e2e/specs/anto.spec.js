// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for page Antonio", () => {
    it("Visits page /antonio", () => {
        cy.visit("http://localhost:8080/");
        cy.get('[href="/antonio"]').click();
        cy.url().should("include", "/antonio");
    });

    it("Should change project when the shuffle button is clicked", () => {
        cy.visit("http://localhost:8080/antonio");

        cy.get(".desc > a").should("have.text", "A Monthly spotify recap");

        cy.get(".shuffle").click();

        cy.get(".desc > a").should("not", "have.text", "A Monthly spotify recap");
    });
});
