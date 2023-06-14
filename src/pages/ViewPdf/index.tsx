import { useTranslation } from "react-i18next"
import { useContext } from "react"
import UploadIcon from "../../assets/images/UploadIcon.svg"
import PDFList from "../../components/PDFList"
import TabsView from "../../components/TabsView"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"
import GlobalStyle from "../../styles/styles"
import { PageWrapper, UploadButton } from "./styles"

const ViewPdf = () => {
  const { t } = useTranslation()
  const { veiculos } = useContext(ViewPDFContext)

  return (
    <PageWrapper>
      <UploadButton to="/" data-testid="upload-button">
        <img src={UploadIcon} alt={t("viewPDF.pdfList.go") || ""} />
      </UploadButton>
      <PDFList />
      {!!veiculos?.length && <TabsView />}
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
