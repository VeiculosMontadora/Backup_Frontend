import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import useGet from "../../hooks/useGet"
import UploadIcon from "../../assets/images/UploadIcon.svg"
import useDelete from "../../hooks/useDelete"
import { Veiculo } from "../../models/PDF"
import PDFList from "../../components/PDFList"
import TabsView from "../../components/TabsView"
import GlobalStyle from "../../styles/styles"
import { PageWrapper, SaveButton, UploadButton } from "./styles"

const ViewPdf = () => {
  const { t } = useTranslation()
  const { result, loading, setResult } = useGet({ init: true })
  const { deletePdf, pdfName } = useDelete()
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [selectedPdf, setSelectedPdf] = useState<string>("")

  const onPDFclick = (fileName: string) => {
    const file = result.find((arquivo) => arquivo.nome === fileName)
    if (!file) return
    setSelectedPdf(fileName + file.ultimo_visto)
    setVeiculos(file.veiculos || [])
  }

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

  return (
    <PageWrapper>
      <UploadButton to="/" data-testid="upload-button">
        <img src={UploadIcon} alt="Ir para a página de envio de pdf" />
      </UploadButton>
      <PDFList
        result={result}
        onPDFclick={onPDFclick}
        onDeletePDF={onDeletePDF}
        selectedPdf={selectedPdf}
        loading={loading}
      />
      <div>
        <TabsView veiculos={veiculos} />
        <SaveButton variant="contained" color="primary">
          {t("view.saveButton")}
        </SaveButton>
      </div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
