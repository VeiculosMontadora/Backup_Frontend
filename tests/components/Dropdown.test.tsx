import React from "react"
import { render, screen } from "@testing-library/react"
import Dropdown from "../../src/components/Dropdown"
import { PdfFile } from "../../src/pages/Home/types"

// TO DO: Add tests for the dropdown component
describe("dropdown component", () => {
  test("should render the dropdown component", () => {
    render(
      <Dropdown
        fileName={""}
        index={0}
        setUploadedFiles={function (
          value: React.SetStateAction<PdfFile[]>
        ): void {
          throw new Error("Function not implemented.")
        }}
      />
    )
  })
})
