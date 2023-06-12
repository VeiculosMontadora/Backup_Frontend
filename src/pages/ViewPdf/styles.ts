import styled from "styled-components"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { backgroundBlue, buttonBlue } from "../../styles/colors"

export const PageWrapper = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  background-color: ${backgroundBlue};

  padding: 4rem 6rem;

  > div:first-of-type {
    min-width: 450px;
  }

  > div:last-of-type {
    flex: 1;
    min-width: 650px;
  }

  @media screen and (max-width: 1308px) {
    > div:first-of-type {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    > div {
      display: none;
    }

    &::after {
      content: "Página não disponível para telas menores de 800px : (";
      width: 100%;

      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;

      font-size: 1.5rem;
    }
  }
`

export const SaveButton = styled(Button)`
  && {
    position: absolute;
  }

  top: 130px;
  right: 110px;
  width: 100px;
  height: 45px;
  outline: 0;
  border: 0;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
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
