export type PDFStatus = "Não aberto" | "Pendente" | "Concluído"

export type PDF = {
  nome: string
  status: PDFStatus
  ultimo_visto: Date
  // TODO: Change to Vehicle type
  veiculos?: object[]
}

export interface PDFListProps {
  /** Should move PDFs state to 'active' and to open editors tab */
  onPDFclick: (PDF: PDF) => void
  /** Should move PDF to complete files tab */
  // TODO: implement
  // onPDFchange: (PDF: PDF) => void
}
