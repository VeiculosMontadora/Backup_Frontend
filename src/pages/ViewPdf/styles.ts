import styled from "styled-components"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { backgroundBlue, buttonBlue } from "../../styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  background-color: ${backgroundBlue};
  padding: 4rem 6rem;
  height: -webkit-fill-available;
  overflow-x: hidden;
`

export const UploadButton = styled(Link)`
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

export default Button
