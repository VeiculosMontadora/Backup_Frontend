import { PdfFile } from "../../pages/Home/types"

export type DropdownProps = {
  fileName: string
  index: number
  setUploadedFiles: React.Dispatch<React.SetStateAction<PdfFile[]>>
}
