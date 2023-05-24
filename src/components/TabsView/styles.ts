import styled from "styled-components"
import AppBar from "@mui/material/AppBar"
import Tab from "@mui/material/Tab"
import { mediumGray } from "../../styles/colors"

export const TabSelected = styled(Tab)`
  background: "#fff" !important;
  color: "#000" !important;
`

export const TabsWrapper = styled(AppBar)`
  background: ${mediumGray} !important;
`

export const PanelWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 6rem 2rem 1rem 2rem;

  gap: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* gap: 0 1rem;
  display: flex;
  flex-wrap: wrap; */

  /* > div {
    &:has([value="desc_cat"]) {
      width: 30%;
    }
    &:has([value="descrenavam"]) {
      width: 70%;
    }
    &:has([value="descricao"]) {
      width: 100%;
    }
    &:has([value="sigla"]) {
      width: 30%;
    }
    &:has([value="pacotedefmodel"]) {
      width: 70%;
    }
    &:has([value="versao"]) {
      width: 30%;
    }
    &:has([value="versaoplus"]) {
      width: 70%;
    }
    &:has([value="ano"]) {
      width: 30%;
    }
    &:has([value="anoplus"]) {
      width: 70%;
    }
    &:has([value="marca"]) {
      width: 30%;
    }
    &:has([value="marcaplus"]) {
      width: 70%;
    }
    &:has([value="linha"]) {
      width: 30%;
    }
    &:has([value="linhaplus"]) {
      width: 70%;
    }
    &:has([value="carrocaria"]) {
      width: 30%;
    }
    &:has([value="carrocariaplus"]) {
      width: 70%;
    }
    &:has([value="segmento"]) {
      width: 30%;
    }
    &:has([value="segmentoplus"]) {
      width: 70%;
    }
    &:has([value="motor"]) {
      width: 30%;
    }
    &:has([value="cilindradas"]) {
      width: 17.5%;
    }
    &:has([value="nrocilindros"]) {
      width: 17.5%;
    }
    &:has([value="potencia1"]) {
      width: 17.5%;
    }
    &:has([value="gasolina1"]) {
      width: 17.5%;
    }
    &:has([value="freteespecifico"]) {
      width: 30%;
    }
    &:has([value="freteespecificoplus"]) {
      width: 17.5%;
    }
    &:has([value="valor"]) {
      width: 17.5%;
    }
    &:has([value="potencia2"]) {
      width: 17.5%;
    }
    &:has([value="gasolina2"]) {
      width: 17.5%;
    }
    &:has([value="carga"]) {
      width: 30%;
    }
    &:has([value="numpassageiros"]) {
      width: 35%;
    }
    &:has([value="numportas"]) {
      width: 35%;
    }
    &:has([value="numrenavam"]) {
      width: 30%;
    }
    &:has([value="especie"]) {
      width: 70%;
    }
    &:has([value="linhaservico"]) {
      width: 30%;
    }
    &:has([value="linhaservicoplus"]) {
      width: 35%;
    }
    &:has([value="codigofipe"]) {
      width: 35%;
    }
    &:has([value="aliqipi"]) {
      width: 30%;
    }
    &:has([value="prazogarantia"]) {
      width: 35%;
    }
    &:has([value="kmgarantia"]) {
      width: 35%;
    }
    &:has([value="observacao"]) {
      width: 100%;
    }
    &:has([value="descricaocompleta"]) {
      width: 100%;
    }
  } */
`
