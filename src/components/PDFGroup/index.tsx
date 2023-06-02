import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material/styles"
import { Typography } from "@material-ui/core"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import { Center, Title, AccordionDetails } from "./styles"
import { PDF } from "../../models/PDF"
import { LoadingIconSpin } from "../FileLoading"
import PDFComponent from "../PDFComponent"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  ".MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}))

interface PDFGroupProps {
  title: string
  PDFs: PDF[]
  defaultExpanded?: true
  selectedPdf: string
  /** Should move PDFs state to 'active' and to open editors tab */
  onPDFclick: (fileName: string) => void
  /** Should delete the given PDF by file name */
  onDeletePDF: (
    fileName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void
  loading: boolean
}

const PDFGroup = ({
  title,
  PDFs,
  selectedPdf,
  defaultExpanded,
  onPDFclick,
  onDeletePDF,
  loading,
}: // , onPDFchange
PDFGroupProps) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState<boolean>(!!defaultExpanded)

  const toggleExpansion = () => {
    setIsExpanded((expanded) => !expanded)
  }

  const pdfs = useMemo(() => {
    if (loading) {
      return (
        <Center>
          <LoadingIconSpin />
        </Center>
      )
    }

    if (!PDFs || PDFs.length === 0) {
      return (
        <Center>
          <Typography>{t("viewPDF.pdfList.noFiles")}</Typography>
        </Center>
      )
    }

    return PDFs.map((file) => (
      <PDFComponent
        key={file.nome + file.ultimo_visto.toString()}
        fileName={file.nome}
        status={file.status}
        lastEditedAt={file.ultimo_visto.toString()}
        isSelected={selectedPdf === file.nome + file.ultimo_visto}
        onClick={onPDFclick}
        onDeletePDF={onDeletePDF}
      />
    ))
  }, [PDFs, loading, t, onPDFclick, onDeletePDF, selectedPdf])

  return (
    <Accordion
      expanded={isExpanded}
      onChange={toggleExpansion}
      data-testid="pdf-group-wrapper"
    >
      <AccordionSummary
        aria-controls="panel-content"
        id="panel-header"
        data-testid="pdf-group-header"
      >
        <Title variant="h2" data-testid="pdf-group-header-title">
          {title}
        </Title>
      </AccordionSummary>
      <AccordionDetails data-testid="pdf-group-body">{pdfs}</AccordionDetails>
    </Accordion>
  )
}

export default PDFGroup
