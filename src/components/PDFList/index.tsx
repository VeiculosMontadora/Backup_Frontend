import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import { PDF } from "../../models/PDF"
import { PDFListProps } from "./types"
import Wrapper from "./styles"

const PDFList = ({
  result,
  onPDFclick,
  onDeletePDF,
  selectedPdf,
  loading,
}: PDFListProps) => {
  const { t } = useTranslation()

  const filterPDFs = useMemo(() => {
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
  }, [result])

  const [notOpened, incompletePDFs, completePDFs] = filterPDFs

  return (
    <Wrapper>
      <PDFGroup
        title={t("viewPDF.pdfList.openEditors")}
        PDFs={notOpened}
        defaultExpanded
        onPDFclick={onPDFclick}
        onDeletePDF={onDeletePDF}
        selectedPdf={selectedPdf}
        loading={loading}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={incompletePDFs}
        onPDFclick={onPDFclick}
        onDeletePDF={onDeletePDF}
        selectedPdf={selectedPdf}
        loading={loading}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={completePDFs}
        onPDFclick={onPDFclick}
        onDeletePDF={onDeletePDF}
        selectedPdf={selectedPdf}
        loading={loading}
      />
    </Wrapper>
  )
}

export default PDFList
