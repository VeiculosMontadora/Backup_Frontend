import { render } from "@testing-library/react"
import { MockFiles } from "."

describe("<MockFiles />", () => {
  test("should render all file component variables", () => {
    render(<MockFiles />)
  })
})
