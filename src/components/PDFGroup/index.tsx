import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material/styles"
import { Typography } from "@material-ui/core"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import { PDF } from "../PDFList/types"
import { LoadingIconSpin } from "../FileLoading"
import PDFComponent from "../PDFComponent"
import { Center, Title, AccordionDetails } from "./styles"

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
  /** Should move PDFs state to 'active' and to open editors tab */
  // onPDFclick: (PDF: PDF) => void
  /** Should move PDF to complete files tab
   * implemented by save button
   */
  // TODO: implement
  // onPDFchange?: (PDF: PDF) => void
  loading: boolean
}

const PDFGroup = ({
  title,
  PDFs,
  defaultExpanded,
  // onPDFclick,
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
        key={file.nome}
        fileName={file.nome}
        status={file.status}
        lastEditedAt={file.ultimo_visto.toString()}
        isSelected={false}
      />
    ))
  }, [PDFs, loading, t])

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
