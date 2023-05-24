import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import Wrapper from "./styles"
import { PDF } from "../../models/PDF"
import { PDFListProps } from "./types"

const PDFList = ({
  result,
  onPDFclick,
  selectedPdf,
  loading,
}: PDFListProps) => {
  const { t } = useTranslation()

  const filterPDFs = () => {
    if (!result.forEach) return [[], [], []]

    const notOpened: PDF[] = []
    const incompletePDFs: PDF[] = []
    const completePDFs: PDF[] = []

    result?.forEach((file: any) => {
      if (file.status === "nao aberto") notOpened.push(file)
      if (file.status === "pendente") incompletePDFs.push(file)
      if (file.status === "concluido") completePDFs.push(file)
    })

    return [notOpened, incompletePDFs, completePDFs]
  }
  const [notOpened, incompletePDFs, completePDFs] = filterPDFs()

  return (
    <Wrapper>
      <PDFGroup
        title={t("viewPDF.pdfList.openEditors")}
        PDFs={notOpened}
        defaultExpanded
        onPDFclick={onPDFclick}
        selectedPdf={selectedPdf}
        // onPDFchange={onPDFchange}
        loading={loading}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={incompletePDFs}
        onPDFclick={onPDFclick}
        selectedPdf={selectedPdf}
        // onPDFchange={onPDFchange}
        loading={loading}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={completePDFs}
        onPDFclick={onPDFclick}
        selectedPdf={selectedPdf}
        loading={loading}
      />
    </Wrapper>
  )
}

export default PDFList
