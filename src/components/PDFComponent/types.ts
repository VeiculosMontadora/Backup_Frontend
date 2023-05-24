export type Status = "concluido" | "pendente" | "nao aberto"

export type PDFComponentProps = {
  fileName: string
  status: Status
  isSelected: boolean
  lastEditedAt: string
}
