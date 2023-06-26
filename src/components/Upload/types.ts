import { PdfFile } from "../../pages/Home/types"

export type UploadProps = {
  size: boolean
  uploadedFiles: PdfFile[]
  setUploadedFiles: React.Dispatch<React.SetStateAction<PdfFile[]>>
}
