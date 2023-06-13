import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { ButtonArea, Wrapper } from "./styles"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"

interface ExportModalProps {
  isHidden: boolean
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
  pdfName: string
}

const ExportModal = ({ pdfName, isHidden, setIsHidden }: ExportModalProps) => {
  const { t } = useTranslation()
  const { onExportPDF } = useContext(ViewPDFContext)
  const onExport = (
    type: "json" | "csv",
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onExportPDF(pdfName, event, type)
    setIsHidden(true)
  }
  return (
    <Wrapper style={{ display: isHidden ? "none" : "flex" }}>
      <ButtonArea onClick={(event) => onExport("json", event)}>
        {t("viewPDF.exportPDF.JSON")}
      </ButtonArea>
      <ButtonArea onClick={(event) => onExport("csv", event)}>
        {t("viewPDF.exportPDF.CSV")}
      </ButtonArea>
    </Wrapper>
  )
}

export default ExportModal
