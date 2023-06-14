import { useState, useMemo, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useLocation } from "react-router-dom"
import Button from "../../components/Button"
import FileLoading from "../../components/FileLoading"
import ProgressIcon from "../../components/ProgressIcon"
import usePost from "../../hooks/usePost"
import { Request } from "../Home/types"
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

  const post = usePost()

  const [files, setFiles] = useState<Request[]>(location?.state?.requests)

  const error = useMemo(() => files?.find((file) => file.error), [files])
  const loading = useMemo(() => files?.find((file) => file.loading), [files])

  const progressIcon = useMemo(() => {
    if (loading) return <ProgressIcon progress="extracting" />

    if (files?.every((file) => file.error))
      return <ProgressIcon progress="fail" />

    if (error) return <ProgressIcon progress="partialFail" />

    return <ProgressIcon progress="success" />
  }, [error, files, loading])

  const button = useMemo(() => {
    if (!error && !loading) {
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
  }, [error, loading, navigate, t])

  const checkStatus = (file: Request) => {
    if (file.error) {
      return "failed"
    }

    if (file.loading) {
      return "uploading"
    }

    return "uploaded"
  }

  useEffect(() => {
    if (files === undefined) {
      navigate("/")
    }

    files?.forEach((file) => {
      post(file, setFiles)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Content>
        {progressIcon}
        <FilesWrapper>
          {files?.map((file) => {
            return (
              <FileLoading
                key={file.pdf.name}
                fileName={file.pdf.name}
                status={checkStatus(file)}
              />
            )
          })}
        </FilesWrapper>
        <DoubleButton>{button}</DoubleButton>
      </Content>
      <GlobalStyle />
    </Container>
  )
}

export default Process
