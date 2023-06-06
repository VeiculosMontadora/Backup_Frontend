import { useTranslation } from "react-i18next"
import UploadIcon from "../../assets/images/UploadIcon.svg"
import PDFList from "../../components/PDFList"
import TabsView from "../../components/TabsView"
import GlobalStyle from "../../styles/styles"
import { PageWrapper, SaveButton, UploadButton } from "./styles"

const ViewPdf = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <UploadButton to="/" data-testid="upload-button">
        <img src={UploadIcon} alt="Ir para a página de envio de pdf" />
      </UploadButton>
      <PDFList />
      <div>
        <TabsView />
        <SaveButton variant="contained" color="primary">
          {t("view.saveButton")}
        </SaveButton>
      </div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
