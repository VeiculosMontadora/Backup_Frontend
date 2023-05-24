export interface PDFListProps {
  result: any[]
  loading: boolean
  selectedPdf: string
  /** Should move PDFs state to 'active' and to open editors tab */
  onPDFclick: (fileName: string) => void
  /** Should move PDF to complete files tab */
  // TODO: implement
  // onPDFchange: (PDF: PDF) => void
}
