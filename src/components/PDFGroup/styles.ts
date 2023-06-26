import styled from "styled-components"
import { styled as style } from "@mui/material/styles"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography/Typography"

export const Title = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 1.3rem;
  }
`

export const AccordionDetails = style(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  "& > * + *": {
    marginTop: theme.spacing(2),
  },
}))

export const Center = styled.div`
  display: flex;
  justify-content: center;
`
