import React from "react"
import { fireEvent, render, screen, within } from "@testing-library/react"
import Main from "../src/pages/main"

describe("<Main />", () => {
  const renderMainPage = () => {
    return render(<Main />)
  }

  test("should render the main page", () => {
    renderMainPage()
    expect(screen.getByText(/main page/i)).toBeInTheDocument()
  })
  test("should display the select and change it's value to a existing one", async () => {
    const { findByTestId } = renderMainPage()
    const select = await findByTestId("custom-select")
    expect(select).toBeInTheDocument()

    const button = within(select).getByRole("button")
    fireEvent.mouseDown(button)
    const listbox = within(screen.getByRole("presentation")).getByRole(
      "listbox"
    )
    const options = within(listbox).getAllByRole("option")
    const optionValues = options.map((li) => li.getAttribute("data-value"))
    expect(optionValues).toEqual(["10", "20", "30"])
    fireEvent.click(options[1])
    expect(screen.getByText("Twenty")).toBeInTheDocument()
  })
})
