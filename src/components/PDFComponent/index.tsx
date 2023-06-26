import { useContext, useEffect, useMemo, useState } from "react"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ImportContactsIcon from "@mui/icons-material/ImportContacts"
import FileExportIcon from "@mui/icons-material/FileUpload"
import DeleteIcon from "@mui/icons-material/Delete"
import CheckIcon from "@mui/icons-material/Check"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
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
  FinishButton,
  ExportButton,
} from "./styles"

const PDFComponent = ({
  fileName,
  status,
  lastEditedAt,
  isSelected,
}: PDFComponentProps) => {
  const { onPDFclick, onDeletePDF, onUpdatePDF, selectedPdf } =
    useContext(ViewPDFContext)
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
            <ImportContactsIcon />
          </UnfinishedComponentWrapper>
        )
      case "nao aberto":
        return (
          <NotOpenComponentWrapper>
            <VisibilityOffIcon />
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
      data-testid={`pdf-component-${fileName}-wrapper`}
      data-updated={handleDateUpdated()}
      data-selected={isSelected}
      onClick={() => onPDFclick(fileName)}
    >
      {icon}
      <Title variant="h2" data-testid={`pdf-component-${fileName}-title`}>
        {fileName}
      </Title>
      <ExportFileWrapper>
        <ExportButton
          data-testid={`pdf-component-${fileName}-export-button`}
          onClick={(event) => {
            setIsHidden(false)
            event.stopPropagation()
          }}
        >
          <FileExportIcon />
        </ExportButton>
        <DeleteButton
          data-testid={`pdf-component-${fileName}-delete-button`}
          onClick={(event) => onDeletePDF(fileName, event)}
        >
          <DeleteIcon />
        </DeleteButton>
        <FinishButton onClick={() => onUpdatePDF(selectedPdf)}>
          <CheckIcon />
        </FinishButton>
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
