import { useCallback, useState } from "react"
import endpoint from "../config"

const useDelete = () => {
  const [pdfName, setPdfName] = useState<string>("")

  const staticURL = `${endpoint}/pdfs/`

  const deletePdf = useCallback(
    async (fileName: string) => {
      await fetch(`${staticURL}${fileName}`, {
        method: "DELETE",
      }).then(async (res) => {
        if (res.status === 200) {
          setPdfName(await res.json())
        }
      })
    },
    [staticURL]
  )

  return { deletePdf, pdfName }
}

export default useDelete
