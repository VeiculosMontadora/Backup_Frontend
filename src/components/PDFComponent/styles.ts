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

const borderRadius = "6.18px"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px 30px;
  margin-bottom: 20px;
  background-color: ${superWhite};
  border-radius: ${borderRadius};
  align-items: center;
  width: 100%;
  height: 100%;
  &[dataSelected="true"] {
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
  cursor: pointer;
  display: flex;
  > svg {
    fill: ${darkerGray};
  }
`
