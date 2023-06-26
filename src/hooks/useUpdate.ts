import { useCallback } from "react"
import endpoint from "../config"

const useUpdateStatus = () => {
  const staticURL = `${endpoint}/pdfs/`

  const updateStatusPdf = useCallback(
    async (fileName: string, status: string) => {
      await fetch(`${staticURL}${fileName}?status=${status}`, {
        method: "PATCH",
      })
    },
    [staticURL]
  )

  return { updateStatusPdf }
}

export default useUpdateStatus
