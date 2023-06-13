import {
  createContext,
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import useGet from "../hooks/useGet"
import useDelete from "../hooks/useDelete"
import { Veiculo } from "../models/PDF"
import useExport from "../hooks/useExport"

interface IViewPDFContext {
  result: any[]
  loading: boolean
  setResult: Dispatch<SetStateAction<any[]>>
  deletePdf: (fileName: string) => Promise<void>
  pdfName: string
  veiculos: Veiculo[]
  setVeiculos: Dispatch<SetStateAction<Veiculo[]>>
  selectedPdf: string
  setSelectedPdf: Dispatch<SetStateAction<string>>
  onPDFclick: (fileName: string) => void
  onDeletePDF: (fileName: string, event: MouseEvent<HTMLButtonElement>) => void
  onExportPDF: (
    fileName: string,
    event: MouseEvent<HTMLButtonElement>,
    type: "json" | "csv"
  ) => void
}

export const ViewPDFContext = createContext<IViewPDFContext>(
  {} as IViewPDFContext
)

export const ViewPDFProvider = ({ children }: { children: ReactNode }) => {
  const { exportPdf } = useExport()
  const { result, loading, setResult } = useGet()
  const { deletePdf, pdfName } = useDelete()
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [selectedPdf, setSelectedPdf] = useState<string>("")

  const onPDFclick = useCallback(
    (fileName: string) => {
      const file = result.find((arquivo) => arquivo.nome === fileName)
      if (!file) return
      setSelectedPdf(fileName + file.ultimo_visto)
      setVeiculos(file.veiculos || [])
    },
    [result, setSelectedPdf, setVeiculos]
  )

  const onExportPDF = useCallback(
    async (
      fileName: string,
      event: React.MouseEvent<HTMLButtonElement>,
      type: "json" | "csv"
    ) => {
      event.stopPropagation()
      exportPdf(fileName, type)
        .then((res) => {
          const [name] = fileName.split(".")
          const blob = new Blob([res], { type: `text/${type}` })
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.setAttribute("download", `${name}.${type}`)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(err)
        })
    },
    [exportPdf]
  )

  const onDeletePDF = useCallback(
    (fileName: string, event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      // eslint-disable-next-line no-alert
      if (!window.confirm("Tem certeza que quer deletar?")) return
      deletePdf(fileName)
    },
    [deletePdf]
  )

  useEffect(() => {
    if (result.find((arq) => arq.nome === pdfName)) {
      const newResult = result.filter(({ nome }) => nome !== pdfName)
      setResult(newResult)
    }
  }, [pdfName, result, setResult])

  const viewPDFItems = useMemo(
    () => ({
      result,
      loading,
      setResult,
      deletePdf,
      pdfName,
      veiculos,
      setVeiculos,
      selectedPdf,
      setSelectedPdf,
      onPDFclick,
      onDeletePDF,
      onExportPDF,
    }),
    [
      result,
      loading,
      setResult,
      deletePdf,
      pdfName,
      veiculos,
      setVeiculos,
      selectedPdf,
      setSelectedPdf,
      onPDFclick,
      onDeletePDF,
      onExportPDF,
    ]
  )

  return (
    <ViewPDFContext.Provider value={viewPDFItems}>
      {children}
    </ViewPDFContext.Provider>
  )
}
