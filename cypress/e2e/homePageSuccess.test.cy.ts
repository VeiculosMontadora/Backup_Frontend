/// <reference types="cypress" />

import {
  BASE_URL,
  COMPONENTS_ID,
  FILES,
  TEXTS,
  TIMEOUT_BACK,
} from "../fixtures/variables"

describe("Home page test", () => {
  beforeEach(() => {
    cy.visit(BASE_URL)
    cy.viewport(1980, 1080)
  })

  it("testing the title name", () => {
    cy.get(COMPONENTS_ID.HOME_TITLE).should("have.text", TEXTS.HEADER)
  })

  it("testing file upload sucess", () => {
    cy.get(COMPONENTS_ID.PDF_SEND_ICON).selectFile(
      [FILES.CHEV_TRACKER, FILES.JEEP_RENEGADE, FILES.JEEP_COMPASS],
      { action: "drag-drop" }
    )

    // cy.get(".sc-bgqQcB").should("have.text", MESSAGES.SUPORTED_FILE)

    // cy.get(".sc-cJPUEC").children().should("have.length", 3)

    cy.get(COMPONENTS_ID.FILE_NAME)
      .first()
      .should("have.text", "2023_03_07 - MEV Chevrolet Tracker MY24 (2).pdf")

    cy.get(COMPONENTS_ID.FILE_NAME)
      .eq(1)
      .should("have.text", "LP Jeep Nacional Renegade - Dez 22 (1).pdf")

    cy.get(COMPONENTS_ID.FILE_NAME)
      .eq(2)
      .should("have.text", "LP_Compass_Test.pdf")

    cy.get(COMPONENTS_ID.SELECT_MANUFACTURER_BUTTON)
      .first()
      .children()
      .first()
      .should("have.text", "Chevrolet (GM)")

    cy.get(COMPONENTS_ID.SELECT_MANUFACTURER_BUTTON)
      .eq(1)
      .children()
      .first()
      .should("have.text", "Jeep")

    cy.get(COMPONENTS_ID.DELETE_BUTTON).first().click()

    cy.get(COMPONENTS_ID.FILE_NAME).should(
      "not.have.text",
      "2023_03_07 - MEV Chevrolet Tracker MY24 (2).pdf"
    )

    cy.get(COMPONENTS_ID.SELECT_MANUFACTURER_BUTTON)
      .first()
      .children()
      .first()
      .should("have.text", "Jeep")

    cy.get(COMPONENTS_ID.SELECT_MANUFACTURER_BUTTON).eq(1).click()

    cy.get(COMPONENTS_ID.SELECT_JEEP).click()

    cy.get(COMPONENTS_ID.SELECT_MANUFACTURER_BUTTON)
      .eq(1)
      .children()
      .first()
      .should("have.text", "Jeep")

    cy.get(COMPONENTS_ID.PDF_SEND_ICON).selectFile(FILES.CHEV_TRACKER, {
      action: "drag-drop",
    })

    cy.get(COMPONENTS_ID.FILE_NAME)
      .last()
      .should("have.text", "2023_03_07 - MEV Chevrolet Tracker MY24 (2).pdf")

    cy.get(COMPONENTS_ID.SELECT_MANUFACTURER_BUTTON)
      .last()
      .children()
      .first()
      .should("have.text", "Chevrolet (GM)")

    cy.get(COMPONENTS_ID.DELETE_BUTTON).first().click()

    cy.get(COMPONENTS_ID.DELETE_BUTTON).last().click()

    cy.wait(2000)

    cy.get(COMPONENTS_ID.SEND_BUTTON).click()

    // cy.wait("@extract")
    cy.wait(TIMEOUT_BACK)
  })
})
