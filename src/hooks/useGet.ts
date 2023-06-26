import { useContext, useState } from "react"
import { ViewPDFContext } from "../contexts/ViewPDF.context"
import endpoint from "../config"

const useGet = () => {
  const { setResult } = useContext(ViewPDFContext)
  const [loading, setLoading] = useState<boolean>(false)
  const get = async () => {
    if (loading) {
      return
    }

    setLoading(true)

    const staticURL = `${endpoint}/pdfs/`

    await fetch(staticURL, {
      method: "GET",
    })
      .then(async (res) => {
        setResult(await res.json())
        if (!localStorage.getItem("pdfs")) {
          localStorage.setItem("pdfs", JSON.stringify(await res.json()))
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false)
      })
  }
  return { get }
}

export default useGet
