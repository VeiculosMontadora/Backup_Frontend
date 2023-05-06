export type PdfFile = {
  pdf: File
  type: string
}

export type Request = {
  file: PdfFile
  error: boolean
}
