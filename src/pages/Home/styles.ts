import styled from "styled-components"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { buttonBlue, darkGray } from "../../styles/colors"

export const HomeButton = styled(Link)`
  position: absolute;
  width: 55px;
  height: 55px;
  left: 25px;
  top: 25px;

  background-color: ${buttonBlue};
  border-radius: 50px;
  outline: 0;
  border: 0;

  display: grid;
  place-items: center;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }

  svg {
    width: 67.5%;
  }
`

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
