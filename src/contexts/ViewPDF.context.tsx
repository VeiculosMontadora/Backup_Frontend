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

interface IViewPDFContext {
  result: any[]
  loading: boolean
  setResult: Dispatch<SetStateAction<any[]>>
  get: any
  deletePdf: (fileName: string) => Promise<void>
  pdfName: string
  veiculos: Veiculo[]
  setVeiculos: Dispatch<SetStateAction<Veiculo[]>>
  selectedPdf: string
  setSelectedPdf: Dispatch<SetStateAction<string>>
  onPDFclick: (fileName: string) => void
  onDeletePDF: (fileName: string, event: MouseEvent<HTMLButtonElement>) => void
}

export const ViewPDFContext = createContext<IViewPDFContext>(
  {} as IViewPDFContext
)

export const ViewPDFProvider = ({ children }: { children: ReactNode }) => {
  const { result, loading, setResult, get } = useGet()
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
      get,
      deletePdf,
      pdfName,
      veiculos,
      setVeiculos,
      selectedPdf,
      setSelectedPdf,
      onPDFclick,
      onDeletePDF,
    }),
    [
      result,
      loading,
      setResult,
      get,
      deletePdf,
      pdfName,
      veiculos,
      setVeiculos,
      selectedPdf,
      setSelectedPdf,
      onPDFclick,
      onDeletePDF,
    ]
  )

  return (
    <ViewPDFContext.Provider value={viewPDFItems}>
      {children}
    </ViewPDFContext.Provider>
  )
}
