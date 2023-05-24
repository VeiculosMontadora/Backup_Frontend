import React from "react"
import { render, screen } from "@testing-library/react"
import PDFList from "../../src/components/PDFList"
import { PDF } from "../../src/components/PDFList/types"

// TODO: Improve tests
describe("PDF List component", () => {
  const PDFs: PDF[] = [
    {
      nome: "PDF 1",
      status: "concluido",
      ultimo_visto: new Date(),
    },
    {
      nome: "Clique em mim!",
      status: "nao aberto",
      ultimo_visto: new Date(),
    },
    {
      nome: "Não, em mim!",
      status: "pendente",
      ultimo_visto: new Date(),
    },
  ]

  beforeEach(() => {
    render(<PDFList />)
  })

  test("should render the PDF List component")
})
