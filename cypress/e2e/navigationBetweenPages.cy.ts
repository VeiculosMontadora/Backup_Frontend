/// <reference types="cypress" />

import { BASE_URL, COMPONENTS_ID, PAGES } from "../fixtures/variables"

describe("testing navigation", () => {
  it("test view and home page navigation", () => {
    cy.viewport(1980, 1080)

    cy.visit(BASE_URL)

    cy.get(COMPONENTS_ID.HOME_BUTTON).children().click()

    cy.url().should("include", PAGES.VIEW)

    cy.get(COMPONENTS_ID.UPLOAD_PAGE_BUTTON).children().click()

    cy.url().should("not.include", PAGES.VIEW)
  })
})
