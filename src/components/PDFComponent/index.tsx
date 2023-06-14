import { useContext, useEffect, useMemo, useState } from "react"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WarningIcon from "@mui/icons-material/Warning"
import InfoIcon from "@mui/icons-material/Info"
import FileExportIcon from "@mui/icons-material/FileUpload"
import DeleteIcon from "@mui/icons-material/Delete"
import { PDFComponentProps } from "./types"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"
import ExportModal from "../ExportModal"
import {
  Wrapper,
  Title,
  ConcludedComponentWrapper,
  UnfinishedComponentWrapper,
  NotOpenComponentWrapper,
  ExportFileWrapper,
  DeleteButton,
  ExportButton,
} from "./styles"

const PDFComponent = ({
  fileName,
  status,
  lastEditedAt,
  isSelected,
}: PDFComponentProps) => {
  const { onPDFclick, onDeletePDF } = useContext(ViewPDFContext)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    document.addEventListener("click", () => {
      setIsHidden(true)
    })
    return () => {
      document.removeEventListener("click", () => {
        setIsHidden(true)
      })
    }
  }, [])

  const icon = useMemo(() => {
    switch (status) {
      case "concluido":
        return (
          <ConcludedComponentWrapper>
            <CheckCircleIcon />
          </ConcludedComponentWrapper>
        )
      case "pendente":
        return (
          <UnfinishedComponentWrapper>
            <WarningIcon />
          </UnfinishedComponentWrapper>
        )
      case "nao aberto":
        return (
          <NotOpenComponentWrapper>
            <InfoIcon />
          </NotOpenComponentWrapper>
        )
      default:
        return null
    }
  }, [status])

  const handleDateUpdated = () => {
    if (lastEditedAt) {
      return `Última edição em: ${lastEditedAt}`
    }
    return null
  }

  return (
    <Wrapper
      data-status={status}
      data-updated={handleDateUpdated()}
      data-selected={isSelected}
      onClick={() => onPDFclick(fileName)}
    >
      {icon}
      <Title variant="h2">{fileName}</Title>
      <ExportFileWrapper>
        <ExportButton
          onClick={(event) => {
            setIsHidden(false)
            event.stopPropagation()
          }}
        >
          <FileExportIcon />
        </ExportButton>
        <DeleteButton onClick={(event) => onDeletePDF(fileName, event)}>
          <DeleteIcon />
        </DeleteButton>
      </ExportFileWrapper>
      <ExportModal
        pdfName={fileName}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
    </Wrapper>
  )
}

export default PDFComponent
