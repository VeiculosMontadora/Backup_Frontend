import { useCallback, useEffect, useState } from "react"

type GetProps = {
  init?: boolean
}

const useGet = ({ init }: GetProps) => {
  const [result, setResult] = useState<any[]>([])
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
        if (!localStorage.getItem("pdfs")) {
          localStorage.setItem("pdfs", JSON.stringify(await res.json()))
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [loading])

  useEffect(() => {
    if (init) {
      get()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [init])

  return { get, result, loading, error, setResult }
}

export default useGet
