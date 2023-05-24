import { useMemo } from "react"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WarningIcon from "@mui/icons-material/Warning"
import InfoIcon from "@mui/icons-material/Info"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import { PDFComponentProps } from "./types"
import {
  Wrapper,
  Title,
  ConcludedComponentWrapper,
  UnfinishedComponentWrapper,
  NotOpenComponentWrapper,
  ExportFileWrapper,
} from "./styles"

const PDFComponent = ({
  fileName,
  status,
  lastEditedAt,
  isSelected,
}: PDFComponentProps) => {
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
    >
      {icon}
      <Title variant="h2">{fileName}</Title>
      <ExportFileWrapper>
        <FileDownloadIcon />
      </ExportFileWrapper>
    </Wrapper>
  )
}

export default PDFComponent
