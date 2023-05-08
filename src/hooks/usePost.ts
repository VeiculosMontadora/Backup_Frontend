import { useCallback } from "react"
import { Request } from "../pages/Home/types"

const usePost = () => {
  const dev = import.meta.env.DEV
  const staticURL = dev
    ? `${import.meta.env.VITE_LOCAL}upload/pdf/`
    : `${import.meta.env.VITE_PROD}upload/pdf/`

  const post = useCallback(
    (file: Request, setFiles: any) => {
      const data = new FormData()
      data.append("file", file.pdf)
      data.append("montadora", file.type)

      fetch(staticURL, {
        body: data,
        method: "POST",
      })
        .then((res) => {
          if (res.status !== 200) {
            setFiles((prevFiles: any[]) => {
              const newFiles = prevFiles.map((newFile) => {
                if (newFile.pdf.name !== file.pdf.name) return newFile
                return {
                  ...newFile,
                  error: true,
                }
              })

              return newFiles
            })
          }
        })
        .catch(() => {
          setFiles((prevFiles: any[]) => {
            const newFiles = prevFiles.map((newFile) => {
              if (newFile.pdf.name !== file.pdf.name) return newFile
              return {
                ...newFile,
                error: true,
              }
            })

            return newFiles
          })
        })
        .finally(() => {
          setFiles((prevFiles: any[]) => {
            const newFiles = prevFiles.map((newFile) => {
              if (newFile.pdf.name !== file.pdf.name) return newFile
              return {
                ...newFile,
                loading: false,
              }
            })

            return newFiles
          })
        })
    },
    [staticURL]
  )

  return post
}

export default usePost
