export type PdfFile = {
  pdf: File
  type: string
}

export type Request = {
  pdf: File
  type: string
  error: boolean
  loading: boolean
}
