import { useCallback } from "react"

const useExport = () => {
  const dev = import.meta.env.DEV
  const staticURL = dev
    ? `${import.meta.env.VITE_LOCAL}/pdfs`
    : `${import.meta.env.VITE_PROD}/pdfs`

  const exportPdf = useCallback(
    async (fileName: string, type: "csv" | "json") => {
      if (type === "json") {
        return fetch(`${staticURL}/${fileName}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then(JSON.stringify)
      }
      if (type === "csv") {
        return (
          fetch(`${staticURL}/csv/${fileName}`, {
            method: "GET",
          })
            .then((res) => res.text())
            // eslint-disable-next-line no-eval
            .then(eval)
        )
      }
      throw new Error("Tipo inválido selecionado")
    },
    [staticURL]
  )

  return { exportPdf }
}

export default useExport
