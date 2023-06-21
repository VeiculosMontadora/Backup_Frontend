import {
  BASE_URL,
  TIMEOUT_BACK,
  FILES,
  MESSAGES,
  TEXTS,
} from "../fixtures/variables"

describe("Home page test erros", () => {
  beforeEach(() => {
    cy.visit(BASE_URL)
    cy.viewport(1980, 1080)
  })

  it("sending not .pdf extension files", () => {
    cy.get(".sc-bgqQcB").selectFile(FILES.TEST, { action: "drag-drop" })

    cy.get(".sc-gTRrQi")
      .children()
      .should("have.text", MESSAGES.UNSUPORTED_FILE)
  })

  context("choosing wrong manufacturer for pdf type", () => {
    it("choosing 'chevrolet' type", () => {
      // cy.intercept('POST','/pdfs/upload').as('extract')

      cy.get(".sc-bgqQcB").selectFile(FILES.JEEP_COMPASS, {
        action: "drag-drop",
      })

      cy.get(".MuiInputBase-root > #select-manufacturer").click()

      cy.get(".MuiList-root").children().contains(TEXTS.CHEV).click()

      cy.get('[data-testid="custom-button"]').click()

      // cy.wait('@extract')
      cy.wait(TIMEOUT_BACK)

      cy.get(".sc-jeCNp > .MuiTypography-root").should(
        "have.text",
        MESSAGES.EXTRACTION_ERROR
      )
    })

    it("choosing 'outras' pdf type", () => {
      cy.get(".sc-bgqQcB").selectFile(FILES.JEEP_COMPASS, {
        action: "drag-drop",
      })

      cy.get(".MuiInputBase-root > #select-manufacturer").click()

      cy.get(".MuiList-root").children().contains("Outras").click()

      cy.wait(1000)

      cy.get('[data-testid="custom-button"]').click()

      cy.get(".sc-jeCNp > .MuiTypography-root").should(
        "have.text",
        MESSAGES.EXTRACTION_ERROR
      )
    })
  })
})
