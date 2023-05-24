import { useCallback, useState } from "react"

const useGet = () => {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const get = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)

    const dev = import.meta.env.DEV
    const staticURL = dev
      ? `${import.meta.env.VITE_LOCAL}/pdfs/`
      : `${import.meta.env.VITE_PROD}/pdfs/`

    await fetch(staticURL, {
      method: "GET",
    })
      .then(async (res) => {
        setResult(await res.json())
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [loading])

  // TODO: bring use effect call here

  return { get, result, loading, error }
}

export default useGet
