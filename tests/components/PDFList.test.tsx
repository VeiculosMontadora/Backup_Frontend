import React from "react"
import { render, screen } from "@testing-library/react"
import PDFList from "../../src/components/PDFList"

describe("PDF List component", () => {
  const PDFs: any = [
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
    render(
      <PDFList
        result={PDFs}
        loading={false}
        selectedPdf={""}
        onPDFclick={(_) => { } } onDeletePDF={function (fileName: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
          throw new Error("Function not implemented.")
        } }      />
    )
  })

  test("should render the PDF List component")
})
