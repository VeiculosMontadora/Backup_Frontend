import styled from "styled-components"
import AppBar from "@mui/material/AppBar"
import Tab from "@mui/material/Tab"
import { mediumGray, superWhite } from "../../styles/colors"

export const TabSelected = styled(Tab)`
  && {
    background: ${superWhite};
    color: black;
  }
`

export const TabsWrapper = styled(AppBar)`
  && {
    background: ${mediumGray};
  }
`

export const PanelWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 6rem 2rem 3rem 2rem;

  gap: 2rem;
  display: flex;
  flex-direction: column;
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

export const ArrowsBar = styled.div`
  display: flex;
  flex: 1;
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
