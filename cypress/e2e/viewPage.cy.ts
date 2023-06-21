/// <reference types="cypress" />

import { BASE_URL, FILES } from "../fixtures/variables"

describe("testing view pdf page", () => {
  beforeEach(() => {
    cy.viewport(1980, 1080)
  })

  it("test opening and closing tabs and get request", () => {
    cy.sendPdfToTest(FILES.JEEP_COMPASS)

    cy.getPdfRequest()

    cy.get(
      '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel-content > [data-testid="pdf-group-body"]'
    )
      .children()
      .last()
      .click()

    cy.get(".MuiTabs-flexContainer")
      .children()
      .last()
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .first()
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .eq(1)
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .eq(2)
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .eq(2)
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .eq(3)
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .eq(4)
      .click()
      .should("have.attr", "aria-selected", "true")

    cy.get(".MuiTabs-flexContainer")
      .children()
      .eq(5)
      .click()
      .should("have.attr", "aria-selected", "true")
  })

  it("test opening and closing side tabs", () => {
    cy.visit(BASE_URL)
    cy.get("a > .MuiTypography-root").click()

    cy.getPdfRequest()

    cy.get(".sc-iCnXOK")
      .children()
      .children()
      .first()
      .should("have.attr", "aria-expanded", "true")
    cy.get(".sc-iCnXOK")
      .children()
      .children()
      .first()
      .click()
      .should("have.attr", "aria-expanded", "false")

    cy.get(".sc-iCnXOK")
      .children()
      .children()
      .eq(2)
      .click()
      .should("have.attr", "aria-expanded", "true")
    cy.get(".sc-iCnXOK")
      .children()
      .children()
      .eq(2)
      .click()
      .should("have.attr", "aria-expanded", "false")

    cy.get(".sc-iCnXOK")
      .children()
      .children()
      .eq(4)
      .click()
      .should("have.attr", "aria-expanded", "true")
    cy.get(".sc-iCnXOK")
      .children()
      .children()
      .eq(4)
      .click()
      .should("have.attr", "aria-expanded", "false")
  })
})
