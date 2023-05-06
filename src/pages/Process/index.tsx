import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useLocation, Link } from "react-router-dom"
import Button from "../../components/Button"
import FileLoading from "../../components/FileLoading"
import ProgressIcon from "../../components/ProgressIcon"
import { Request } from "../Home/types"
// import useGet from "../../hooks/useGet"
import GlobalStyle, {
  Container,
  Content,
  FilesWrapper,
} from "../../styles/styles"
import DoubleButton from "./styles"

const Process = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  // const { error, get } = useGet()

  const { requests } = location.state || {}

  if (requests === undefined) {
    navigate("/")
  }

  // eslint-disable-next-line no-console
  console.log(requests)

  const progressIcon = useMemo(() => {
    if (
      requests?.find((file: any) => file.error === true) ||
      false ||
      requests?.length === 0
    ) {
      return <ProgressIcon progress="fail" />
    }

    return <ProgressIcon progress="success" />
  }, [requests])

  const button = useMemo(() => {
    // All files were uploaded successfully

    // TODO:
    // Fazer um get a cada 5 segundos para verificar status de PDF's.
    // Ter uma rota no backend que passamos os nomes dos pdf's e ele retorna os status de todos.

    // eslint-disable-next-line no-constant-condition
    if (true) {
      return (
        <Button
          text={t("fileUpload.buttons.view")}
          color="blue"
          onClick={() => navigate("/view")}
        />
      )
    }

    return (
      <Button
        text={t("fileUpload.buttons.cancel")}
        color="red"
        onClick={() => navigate("/")}
      />
    )
  }, [navigate, t])

  return (
    <Container>
      <Content>
        <Link to="/view">{progressIcon}</Link>
        {requests?.length > 0 && (
          <FilesWrapper>
            {requests.map((request: Request) => {
              return (
                <FileLoading
                  key={
                    request.file.pdf.name +
                    request.file.pdf.size +
                    request.file.pdf.type
                  }
                  fileName={request.file.pdf.name}
                  status={request.error ? "failed" : "uploading"}
                />
              )
            })}
          </FilesWrapper>
        )}
        <DoubleButton>{button}</DoubleButton>
      </Content>
      <GlobalStyle />
    </Container>
  )
}

export default Process
