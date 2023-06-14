import { useContext, useEffect, useCallback } from "react"
import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import Wrapper from "./styles"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"
import useGet from "../../hooks/useGet"
import { PDF } from "../../models/PDF"

const PDFList = () => {
  const { t } = useTranslation()
  const { result } = useContext(ViewPDFContext)
  const { get } = useGet()

  useEffect(() => {
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const returnPDFs = useCallback(
    (type: string) => {
      if (type === "openEditors")
        return (result || []).filter(
          (file: PDF) => file.status === "nao aberto"
        )
      if (type === "incompleteFiles")
        return (result || []).filter((file: PDF) => file.status === "pendente")

      return (result || []).filter((file: PDF) => file.status === "concluido")
    },
    [result]
  )

  return (
    <Wrapper>
      <PDFGroup
        title={t("viewPDF.pdfList.openEditors")}
        PDFs={returnPDFs("openEditors")}
        defaultExpanded
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={returnPDFs("incompleteFiles")}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={returnPDFs("completeFiles")}
      />
    </Wrapper>
  )
}

export default PDFList
