export type Status = "concluido" | "pendente" | "nao aberto"

export type PDFComponentProps = {
  fileName: string
  status: Status
  isSelected: boolean
  lastEditedAt: string
  onClick: (fileName: string) => void
  /** Should delete the given PDF by file name */
  onDeletePDF: (
    fileName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void
}
