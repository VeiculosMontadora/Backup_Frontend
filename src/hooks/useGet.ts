import { useCallback, useEffect, useState } from "react"
import endpoint from "../config"

const useGet = () => {
  const [result, setResult] = useState<any[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const get = useCallback(async () => {
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
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [loading])

  useEffect(() => {
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { get, result, loading, error, setResult }
}

export default useGet
