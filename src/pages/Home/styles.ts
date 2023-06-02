import styled from "styled-components"
import { Typography } from "@mui/material"
import { darkGray } from "../../styles/colors"

export const SubTitle = styled(Typography)`
  justify-content: "flex-start";
  display: flex;

  && {
    margin-bottom: 10px;
    font-weight: 500;
    color: ${darkGray};
    font-size: 1rem;
  }
`

export const FilesRow = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: calc(100% - 200px - 1rem) 200px;
`

export const SendButton = styled.div`
  display: flex;
  justify-content: center;
`
