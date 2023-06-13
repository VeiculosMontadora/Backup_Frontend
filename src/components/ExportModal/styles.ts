import styled from "styled-components"
import { superWhite, text, buttonBlue } from "../../styles/colors"

export const Wrapper = styled.div`
  flex-direction: column;
  position: absolute;
  right: -5px;
  top: -20px;
  width: 110px;
  height: 80px;
  z-index: 1;

  background: #ffffff;
  border-radius: 15px;

  > *:first-child {
    border-radius: 15px 15px 0px 0px;
  }
  > *:last-child {
    border-radius: 0px 0px 15px 15px;
  }
`

export const ButtonArea = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  background: ${superWhite};
  color: ${text};
  border: 1px solid #000000;
  &:hover {
    cursor: pointer;
    background: ${buttonBlue};
    color: ${superWhite};
    opacity: 0.7;
  }
`
