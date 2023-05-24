import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import useGet from "../../hooks/useGet"
import { PDF } from "./types"
import Wrapper from "./styles"

const PDFList = () => {
  const { t } = useTranslation()
  const { get, result, loading } = useGet()

  const filterPDFs = () => {
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

  useEffect(() => {
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <PDFGroup
        title={t("viewPDF.pdfList.openEditors")}
        PDFs={notOpened}
        defaultExpanded
        // onPDFchange={onPDFchange}
        // onPDFclick={onPDFclick}
        loading={loading}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={incompletePDFs}
        // onPDFchange={onPDFchange}
        // onPDFclick={onPDFclick}
        loading={loading}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={completePDFs}
        // onPDFclick={onPDFclick}
        loading={loading}
      />
    </Wrapper>
  )
}

export default PDFList
