import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import Dropdown from "../../components/Dropdown"
import usePost from "../../hooks/usePost"
import { SubTitle, FilesWrapper, FilesRow, SendButton } from "./styles"
import GlobalStyle, {
  Container,
  Content,
  HeaderTitle,
} from "../../styles/styles"

type Request = {
  file: File
  error: boolean
}

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { error, post } = usePost()

  const processUpload = useCallback(() => {
    const requests: Request[] = []
    uploadedFiles.forEach(async (file) => {
      const formData = new FormData()
      formData.append("file", file)
      await post(formData)
      requests.push({
        file,
        error,
      })
    })
    navigate("/process", { state: { requests } })
  }, [error, navigate, post, uploadedFiles])

  const handleDeleteClick = (index: number) => {
    const newUploadedFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newUploadedFiles)
  }

  return (
    <Container>
      <Content>
        <>
          <Link to="/view">
            <HeaderTitle variant="h6">{t("fileUpload.title")}</HeaderTitle>
          </Link>
          <Upload
            size={uploadedFiles.length > 0}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
          {uploadedFiles.length > 0 && (
            <>
              <SubTitle>{t("fileUpload.selectedPdfs")}</SubTitle>
              <FilesWrapper>
                {uploadedFiles.map((file, index) => {
                  return (
                    <FilesRow key={file.name + file.size + file.type}>
                      <FileLoading
                        fileName={file.name}
                        status="downloaded"
                        handleDeleteClick={() => handleDeleteClick(index)}
                      />
                      <Dropdown />
                    </FilesRow>
                  )
                })}
              </FilesWrapper>
              <SendButton>
                <Button
                  text={t("fileUpload.buttons.send")}
                  color="blue"
                  onClick={() => processUpload()}
                  disabled={uploadedFiles.length === 0}
                />
              </SendButton>
            </>
          )}
        </>
      </Content>
      <GlobalStyle />
    </Container>
  )
}

export default Home
