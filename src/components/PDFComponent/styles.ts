import styled from "styled-components"
import { Typography } from "@mui/material"
import {
  superWhite,
  text,
  darkerGray,
  blue,
  yellow,
  greenIcon,
  red,
} from "../../styles/colors"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px 30px;
  margin-bottom: 20px;
  background-color: ${superWhite};
  border-radius: 6.18px;
  align-items: center;
  width: 100%;
  height: 100%;

  &[data-selected="true"] {
    background-color: ${blue};
    color: ${superWhite};
  }

  &::after {
    position: absolute;
    top: 65px;
    left: 2px;
    color: ${text};
    content: attr(data-updated);
  }

  &:hover {
    cursor: pointer;
    background-color: ${blue};
    color: ${superWhite};
  }
`

export const Title = styled(Typography)`
  font-size: 15px !important;
  line-height: 27.8px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Icon = styled.div`
  font-size: 18.55px !important;
  line-height: 27.8px !important;
  position: absolute;
  top: -10px;
  left: -10px;

  > svg {
    transition: 450ms;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ConcludedComponentWrapper = styled(Icon)`
  > svg {
    fill: ${greenIcon};
  }
`

export const UnfinishedComponentWrapper = styled(Icon)`
  > svg {
    fill: ${yellow};
  }
`

export const NotOpenComponentWrapper = styled(Icon)`
  > svg {
    fill: ${red};
  }
`

export const ExportFileWrapper = styled(Icon)`
  right: 0;
  position: static;
  align-items: center;
  display: flex;

  > svg {
    fill: ${darkerGray};
  }

  &:hover {
    cursor: pointer;
  }
`
