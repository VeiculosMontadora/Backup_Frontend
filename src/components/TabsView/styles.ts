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
  padding: 6rem 2rem 1rem 2rem;

  gap: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
