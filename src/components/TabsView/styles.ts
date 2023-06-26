import styled from "styled-components"
import AppBar from "@mui/material/AppBar"
import { Button } from "@mui/material"
import { mediumGray, superWhite } from "../../styles/colors"

export const TabsWrapper = styled(AppBar)`
  && {
    background: ${mediumGray};
  }
`

export const PanelWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4rem 2rem 3rem 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`

export const SaveButton = styled(Button)`
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
`

const ItemRow = styled.div`
  display: grid;
  justify-content: space-between;
`

export const TwoItemsRows = styled(ItemRow)`
  grid-template-columns: 20% 75%;
`

export const ThreeItemsRows = styled(ItemRow)`
  grid-template-columns: 20% 35% 35%;
`

export const FiveItemsRows = styled(ItemRow)`
  grid-template-columns: 20% 15% 15% 15% 15%;
`

export const Carinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
`

export const ArrowWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: fill 0.3s;
  &:hover {
    > svg {
      fill: ${superWhite};
    }
  }
`

export const FinishButtonWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`
