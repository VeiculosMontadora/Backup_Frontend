import { Typography } from "@mui/material"
import styled from "styled-components"
import TextField from "@mui/material/TextField"

export const StyledInput = styled(TextField)`
  .MuiOutlinedInput-input {
    cursor: ${({ cursor }: { cursor: "pointer" | "auto" }) => cursor};
  }
`

export const Label = styled(Typography)`
  && {
    font-size: 1.2rem;
  }

  position: absolute;
  top: -22.5px;
  left: 5px;
`
