import { Button } from "@mui/material"
import { Content, LinkClean, NotFoundText } from "./styles"

const NotFound = () => {
  return (
    <Content>
      <NotFoundText variant="h1">404</NotFoundText>
      <NotFoundText variant="h6">
        A página que você está procurando não existe
      </NotFoundText>
      <LinkClean to="/">
        <Button variant="contained">Voltar para a tela principal</Button>
      </LinkClean>
    </Content>
  )
}

export default NotFound
