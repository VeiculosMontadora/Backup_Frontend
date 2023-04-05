import { useState } from "react"
import Button from "@mui/material/Button"
import { useTranslation } from "react-i18next"
import { usePost } from "../../hooks/useApiCall"
import GlobalStyle from "../../styles/styles"
import { Container, Content } from "./styles"
import { MockFiles } from "../../components/FileLoading"

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any>([])
  const [processingPage, setProcessingPage] = useState(false)
  const [startUpload, setStartUpload] = useState(false)

  const { t } = useTranslation()

  const { loading, refresh, result, statusCode } = usePost({
    method: "POST",
    start: startUpload,
    data: uploadedFiles,
  })

  // eslint-disable-next-line no-console
  console.log(loading, refresh, result, statusCode, setUploadedFiles)

  const processUpload = () => {
    // TODO: Check if file has something like "chevrolet", "jeep" and send it's type in body of the request

    setStartUpload(true)
    setProcessingPage(true)
  }

  return processingPage ? (
    <div>Processing...</div>
  ) : (
    <Container>
      <Content>
        <p style={{ justifyContent: "center" }}>teste</p>
      </Content>
      <Button onClick={processUpload} variant="contained" component="label">
        {t("fileUpload.buttons.send")}
      </Button>
      <GlobalStyle />

      <p style={{ justifyContent: "center" }}>
        <code>
          <pre>
            {`
              {/* An example of each of the variations and their props */}
              {/* TODO: Review and Remove */}
              <MockFiles />
            `}
          </pre>
        </code>
      </p>
      {/* An example of each of the variations and their props */}
      {/* TODO: Review and Remove */}
      <MockFiles />
    </Container>
  )
}

export default Home
