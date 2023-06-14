import { Typography } from "@mui/material"
import styled from "styled-components"
import TextField from "@mui/material/TextField"

export const StyledInput = styled(TextField)`
  && {
    width: 100%;
  }

  .MuiOutlinedInput-input {
    cursor: ${({ cursor }: { cursor: "pointer" | "auto" }) => cursor};
  }
`

export const Label = styled(Typography)`
  && {
    font-size: ${(props: { small: boolean }) =>
      props.small ? ".85rem" : "1rem"};
  }

  position: absolute;
  top: -22.5px;
  left: 5px;
`
