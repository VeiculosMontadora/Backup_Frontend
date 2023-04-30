import React from "react"
import { render } from "@testing-library/react"
import ExtractProgress from "../../src/components/ProgressIcon"

describe("progress icon component", () => {
  test("should render the component with loading state", () => {
    render(<ExtractProgress progress="extracting" />)
  })

  test("should render the component with failed state", () => {
    render(<ExtractProgress progress="fail" />)
  })

  test("should render the progress icon component with success state", () => {
    render(<ExtractProgress progress="success" />)
  })
})
