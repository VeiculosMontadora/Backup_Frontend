import { useCallback, useEffect, useState } from "react"

interface BaseProps {
  start: boolean
}

type GetProps = {
  method: "GET"
  data?: never
}

type PostProps = {
  method: "POST"
  data: object
}

type ConditionalProps = GetProps | PostProps

type Props = BaseProps & ConditionalProps

type FetchReturn = {
  result: object | undefined
  loading: boolean
  refresh: () => void
  statusCode: number
}

function useFetch({ method, data, start }: Props): FetchReturn {
  const [result, setResult] = useState<object>()
  const [loading, setLoading] = useState(false)
  const [statusCode, setCode] = useState(-1)

  const fetchData = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)

    // TODO: Create env file
    const staticURL = `http://localhost:8080`

    const response = await fetch(staticURL, {
      headers: data === undefined ? {} : { "Content-Type": "application/json" },
      body: JSON.stringify(data === undefined ? {} : data),
      method,
    })

    setCode(response.status)

    try {
      const text = await response.text()
      const newData = JSON.parse(text)
      setResult(newData)
    } catch (err) {
      setResult({})
    }

    setLoading(false)
  }, [data, loading, method])

  useEffect(() => {
    if (start) {
      fetchData()
    }
  }, [fetchData, start])

  const refresh = () => {
    fetchData()
  }

  return { result, loading, refresh, statusCode }
}

export function useGet({ start }: BaseProps): FetchReturn {
  return useFetch({ method: "GET", start })
}

export function usePost({ start, data }: BaseProps & PostProps): FetchReturn {
  const fetchResult = useFetch({ method: "POST", start, data })
  return fetchResult
}
