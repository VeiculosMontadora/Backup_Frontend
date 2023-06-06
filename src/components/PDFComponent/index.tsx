import { useContext, useMemo } from "react"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WarningIcon from "@mui/icons-material/Warning"
import InfoIcon from "@mui/icons-material/Info"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import DeleteIcon from "@mui/icons-material/Delete"
import { PDFComponentProps } from "./types"
import {
  Wrapper,
  Title,
  ConcludedComponentWrapper,
  UnfinishedComponentWrapper,
  NotOpenComponentWrapper,
  ExportFileWrapper,
  DeleteButton,
} from "./styles"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"

const PDFComponent = ({
  fileName,
  status,
  lastEditedAt,
  isSelected,
}: PDFComponentProps) => {
  const { onPDFclick, onDeletePDF } = useContext(ViewPDFContext)

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
    // TODO: add font to lastEditedAt
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
        <FileDownloadIcon />
        <DeleteButton onClick={(event) => onDeletePDF(fileName, event)}>
          <DeleteIcon />
        </DeleteButton>
      </ExportFileWrapper>
    </Wrapper>
  )
}

export default PDFComponent
