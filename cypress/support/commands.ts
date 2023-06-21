/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
    drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    visit(
      originalFn: CommandOriginalFn<any>,
      url: string,
      options: Partial<VisitOptions>
    ): Chainable<Element>
    sendPdfToTest(value: string): Chainable<Element>
    getPdfRequest(): Chainable<Element>
  }
}

Cypress.Commands.add("sendPdfToTest", (pdfPath) => {
  cy.visit("http://ec2-18-117-98-169.us-east-2.compute.amazonaws.com/")
  cy.get(".sc-bgqQcB").selectFile(pdfPath, { action: "drag-drop" })
  cy.get(".sc-bgqQcB").should(
    "have.text",
    "Arquivo suportadoO formato .pdf é obrigatório"
  )
  cy.get(".sc-ispOId").children().first().click()
  cy.get(".MuiList-root").children().contains("Jeep").click()
  cy.get("[data-testid='custom-button']").click()
  // cy.intercept("POST","/pdfs/upload").as("extract")
  // cy.wait("@extract")
  cy.wait(12000)
  cy.get(".sc-jeCNp > .MuiTypography-root").should(
    "have.text",
    "Extração concluída!"
  )
  cy.get("[data-testid='custom-button']").click()
})

Cypress.Commands.add("getPdfRequest", () => {
  // cy.intercept("GET", "/pdfs").as("getPdf")
  // cy.wait("@getPdf").its("response.statusCode").should("be.oneOf", [200, 304, 307])
  // // REQUIRED
  // cy.wait(1000)
  cy.wait(12000)
})
