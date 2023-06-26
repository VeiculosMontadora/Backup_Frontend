import { useContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import { PDF } from "../../models/PDF"
import LoadingIconSpin from "../LoadingIconSpin"
import PDFComponent from "../PDFComponent"
import { Center, Title, AccordionDetails } from "./styles"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"

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
}

const PDFGroup = ({ title, PDFs, defaultExpanded }: PDFGroupProps) => {
  const { t } = useTranslation()
  const { selectedPdf, loading } = useContext(ViewPDFContext)

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
          <Typography data-testid="pdf-group-title-no-pdfs">
            {t("viewPDF.pdfList.noFiles")}
          </Typography>
        </Center>
      )
    }

    return PDFs.map((file) => (
      <PDFComponent
        key={file.nome + file.ultimo_visto.toString()}
        fileName={file.nome}
        status={file.status}
        lastEditedAt={file.ultimo_visto.toString()}
        isSelected={selectedPdf === file}
      />
    ))
  }, [t, loading, selectedPdf, PDFs])

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
          {title} ({PDFs.length})
        </Title>
      </AccordionSummary>
      <AccordionDetails data-testid="pdf-group-body">{pdfs}</AccordionDetails>
    </Accordion>
  )
}

export default PDFGroup
