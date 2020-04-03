describe("Sandbox", () => {
  beforeEach(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title().then((title) => {
      expect(title).toEqual("Sandbox");
    });

    cy.get("h1").then(($header) => {
      const text = $header.text();
      expect(text).toEqual("Sandbox");
    });
  });
});
