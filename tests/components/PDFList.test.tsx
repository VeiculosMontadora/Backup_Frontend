import React from "react"
import { render, screen } from "@testing-library/react"
import PDFList from "../../src/components/PDFList"
import { PDF } from "../../src/components/PDFList/types"

// TODO: Improve tests
describe("PDF List component", () => {
  const PDFs: PDF[] = [
    {
      nome: "PDF 1",
      status: "Concluído",
      ultimo_visto: new Date(),
    },
    {
      nome: "Clique em mim!",
      status: "Não aberto",
      ultimo_visto: new Date(),
    },
    {
      nome: "Não, em mim!",
      status: "Pendente",
      ultimo_visto: new Date(),
    },
  ]
  const onClick = (_: PDF) => {}

  beforeEach(() => {
    render(<PDFList onPDFclick={onClick} />)
  })

  test("should render the PDF List component")
})
