import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import useGet from "../../hooks/useGet"
import { PageWrapper, SaveButton } from "./styles"
import GlobalStyle from "../../styles/styles"
import { Veiculo } from "../../models/PDF"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"
import TabsView from "../../components/TabsView"

const ViewPdf = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { get, result, loading } = useGet()
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [selectedPdf, setSelectedPdf] = useState<string>("")

  const onPDFclick = (fileName: string) => {
    const file = result.find((arquivo) => arquivo.nome === fileName)
    if (!file) return
    setSelectedPdf(fileName + file.ultimo_visto)
    setVeiculos(file.veiculos || [])
  }

  // TODO: Change to usePDFs hook
  /* const onPDFchange = (file: PDF) => {
    updateList(file)
  } */

  const onHomeClick = () => {
    navigate("/")
    // TODO: Change to open modal
  }

  useEffect(() => {
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <HomeButton onClick={onHomeClick} />
      <PDFList
        result={result}
        onPDFclick={onPDFclick}
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
