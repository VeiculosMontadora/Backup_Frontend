import { useCallback } from "react"
import endpoint from "../config"

const useExport = () => {
  const staticURL = `${endpoint}/pdfs`

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
            // Must use eval because the CSV is a stringified literally, else it, for example, displays \r\n instead of new lines and etc
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
