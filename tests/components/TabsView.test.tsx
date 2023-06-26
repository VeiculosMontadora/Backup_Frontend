import React from "react"
import TabsView from "../../src/components/TabsView"
import { render, screen } from "@testing-library/react"

const mockPdfList = [
  {
    desc_cat: {
      valor: "string",
      copiado: true,
    },
    desc_renavam: {
      valor: "string",
      copiado: true,
    },
    sigla: {
      valor: "string",
      copiado: true,
    },
    pacote_def_modelo: {
      valor: "string",
      copiado: true,
    },
    versao: {
      valor: "string",
      copiado: true,
    },
    preco: {
      valor: "string",
      copiado: true,
    },
    ano: {
      valor: "string",
      copiado: true,
    },
    marca: {
      valor: "string",
      copiado: true,
    },
    linha: {
      valor: "string",
      copiado: true,
    },
    motor: {
      modelo: {
        valor: "string",
        copiado: true,
      },
    },
    cilindradas: {
      valor: "string",
      copiado: true,
    },
    nro_cilindradas: {
      valor: "string",
      copiado: true,
    },
    combustiveis: {
      potencia: {
        valor: "string",
        copiado: true,
      },
      tipo_combustivel: {
        valor: "string",
        copiado: true,
      },
    },
    carga: {
      valor: "string",
      copiado: true,
    },
    num_passag: {
      valor: "string",
      copiado: true,
    },
    num_portas: {
      valor: "string",
      copiado: true,
    },
    num_renavam: {
      valor: "string",
      copiado: true,
    },
    producao: {
      valor: "string",
      copiado: true,
    },
    desc_vendas: {
      valor: "string",
      copiado: true,
    },
  },
]

describe("tabs view", () => {
  test("should render tabs according with data received", () => {
    render(<TabsView veiculos={mockPdfList} key={1} />)

    const element = screen.getByTestId("tabs-wrapper")
    expect(element.childElementCount).toBe(mockPdfList.length)
  })
})
