/* eslint-disable react-hooks/exhaustive-deps */
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
import useDelete from "../hooks/useDelete"
import { PDF, Veiculo } from "../models/PDF"
import useUpdateStatus from "../hooks/useUpdate"
import useExport from "../hooks/useExport"

interface IViewPDFContext {
  result: any[]
  setResult: Dispatch<SetStateAction<any[]>>
  deletePdf: (fileName: string) => Promise<void>
  pdfName: string
  veiculos: Veiculo[]
  setVeiculos: Dispatch<SetStateAction<Veiculo[]>>
  selectedPdf: PDF
  setSelectedPdf: Dispatch<SetStateAction<PDF>>
  onPDFclick: (fileName: string) => void
  onDeletePDF: (fileName: string, event: MouseEvent<HTMLButtonElement>) => void
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  onUpdatePDF: (file: PDF) => void
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
  const { deletePdf, pdfName } = useDelete()
  const { updateStatusPdf } = useUpdateStatus()
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [selectedPdf, setSelectedPdf] = useState<PDF>({} as PDF)
  const [result, setResult] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const onPDFclick = useCallback(
    (fileName: string) => {
      const file = result.find((arquivo) => arquivo.nome === fileName)
      if (!file) return
      if (file.status === "nao aberto") {
        file.status = "pendente"
        updateStatusPdf(file.nome, "pendente")
      }
      setSelectedPdf(file)
      setVeiculos(file.veiculos || [])
    },
    [result, updateStatusPdf]
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

  const onUpdatePDF = useCallback(
    async (file: PDF) => {
      await updateStatusPdf(file.nome, "concluido")
      setSelectedPdf({ ...file, status: "concluido" })
      window.location.reload()
    },
    [updateStatusPdf]
  )

  useEffect(() => {
    if (
      result?.find(
        (arq) => arq.nome === (Array.isArray(pdfName) ? pdfName[0] : pdfName)
      )
    ) {
      const newResult = result.filter(
        ({ nome }) => nome !== (Array.isArray(pdfName) ? pdfName[0] : pdfName)
      )
      setResult(newResult)
    }
  }, [pdfName, result, setResult])

  const viewPDFItems = useMemo(
    () => ({
      result,
      setResult,
      deletePdf,
      pdfName,
      veiculos,
      setVeiculos,
      selectedPdf,
      setSelectedPdf,
      onPDFclick,
      onDeletePDF,
      loading,
      setLoading,
      onUpdatePDF,
      onExportPDF,
    }),
    [
      result,
      setResult,
      deletePdf,
      pdfName,
      veiculos,
      setVeiculos,
      selectedPdf,
      setSelectedPdf,
      onPDFclick,
      onDeletePDF,
      loading,
      setLoading,
      onUpdatePDF,
      onExportPDF,
    ]
  )

  return (
    <ViewPDFContext.Provider value={viewPDFItems}>
      {children}
    </ViewPDFContext.Provider>
  )
}
