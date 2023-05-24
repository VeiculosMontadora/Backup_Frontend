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
      ultimo_visto: new Date().toString(),
      criado: new Date().toString(),
      veiculos: [],
    },
    {
      nome: "Clique em mim!",
      status: "nao aberto",
      ultimo_visto: new Date().toString(),
      criado: new Date().toString(),
      veiculos: [],
    },
    {
      nome: "Não, em mim!",
      status: "pendente",
      ultimo_visto: new Date().toString(),
      criado: new Date().toString(),
      veiculos: [],
    },
  ]

  beforeEach(() => {
    render(<PDFList result={PDFs} loading={false} />)
  })

  test("should render the PDF List component")
})
