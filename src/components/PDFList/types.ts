export interface PDFListProps {
  result: any[]
  loading: boolean
  /** Should move PDFs state to 'active' and to open editors tab */
  // onPDFclick: (PDF: PDF) => void
  /** Should move PDF to complete files tab */
  // TODO: implement
  // onPDFchange: (PDF: PDF) => void
}

export type PDFStatus = "nao aberto" | "pendente" | "concluido"

export interface PDF {
  nome: string
  status: PDFStatus
  ultimo_visto: string
  criado: string
  veiculos: Veiculo[]
}

interface ItemPDF {
  valor: string
  copiado: boolean
}

interface Combustivel {
  potencia: ItemPDF
  tipo_combustivel: ItemPDF
}

interface Motor {
  modelo: ItemPDF
  cilindradas: ItemPDF
  nro_cilindradas: ItemPDF
  combustiveis: Combustivel[]
}

export interface Veiculo {
  desc_cat: ItemPDF
  desc_renavam: ItemPDF
  sigla: ItemPDF
  pacote_def_modelo: ItemPDF
  versao: ItemPDF
  preco: ItemPDF
  ano: ItemPDF
  marca: ItemPDF
  linha: ItemPDF
  motor: Motor
  carga: ItemPDF
  num_passag: ItemPDF
  num_portas: ItemPDF
  num_renavam: ItemPDF
  producao: ItemPDF
  desc_vendas: ItemPDF
}
