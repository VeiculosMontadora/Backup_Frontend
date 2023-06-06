import { useCallback, useState } from "react"

const useDelete = () => {
  const [pdfName, setPdfName] = useState<string>("")
  const dev = import.meta.env.DEV
  const staticURL = dev
    ? `${import.meta.env.VITE_LOCAL}/pdfs/`
    : `${import.meta.env.VITE_PROD}/pdfs/`

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
