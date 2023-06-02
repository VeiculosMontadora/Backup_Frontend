export interface PDFListProps {
  result: any[]
  loading: boolean
  selectedPdf: string
  /** Should move PDFs state to 'active' and to open editors tab */
  onPDFclick: (fileName: string) => void
  /** Should delete the given PDF by file name */
  onDeletePDF: (
    fileName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void
}
