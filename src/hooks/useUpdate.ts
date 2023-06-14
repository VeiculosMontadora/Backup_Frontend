import { useCallback } from "react"

const useUpdateStatus = () => {
  const dev = import.meta.env.DEV
  const staticURL = dev
    ? `${import.meta.env.VITE_LOCAL}/pdfs/`
    : `${import.meta.env.VITE_PROD}/pdfs/`

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
