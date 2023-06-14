import { useContext, useMemo } from "react"
import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import { PDF } from "../../models/PDF"
import Wrapper from "./styles"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"

const PDFList = () => {
  const { t } = useTranslation()
  const { result } = useContext(ViewPDFContext)

  const filterPDFs = useMemo(() => {
    if (!result?.forEach) return [[], [], []]

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
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={incompletePDFs}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={completePDFs}
      />
    </Wrapper>
  )
}

export default PDFList
