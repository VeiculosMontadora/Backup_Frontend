import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import Dropdown from "../../components/Dropdown"
import usePost from "../../hooks/usePost"
import { Request } from "./types"
import { SubTitle, FilesRow, SendButton } from "./styles"
import GlobalStyle, {
  Container,
  Content,
  HeaderTitle,
  FilesWrapper,
} from "../../styles/styles"

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [canUpload, setCanUpload] = useState<boolean>(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { error, post } = usePost()

  const processUpload = useCallback(() => {
    if (!canUpload) return

    const requests: Request[] = []
    uploadedFiles.forEach((file) => {
      const formData = new FormData()
      formData.append("file", file)
      post(formData)
      requests.push({
        file,
        error,
      })
    })
    navigate("/process", { state: { requests } })
  }, [canUpload, error, navigate, post, uploadedFiles])

  const handleDeleteClick = (index: number) => {
    const newUploadedFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newUploadedFiles)
  }

  useEffect(() => {
    const foundEmptyDropdown = uploadedFiles.find((file) => file.type === "")

    if (foundEmptyDropdown === undefined) {
      setCanUpload(true)
    } else {
      setCanUpload(false)
    }
  }, [uploadedFiles])

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
                    <FilesRow
                      key={file.pdf.name + file.pdf.size + file.pdf.type}
                    >
                      <FileLoading
                        fileName={file.pdf.name}
                        status="downloaded"
                        handleDeleteClick={() => handleDeleteClick(index)}
                      />
                      <Dropdown
                        fileName={file.pdf.name}
                        index={index}
                        setUploadedFiles={setUploadedFiles}
                      />
                    </FilesRow>
                  )
                })}
              </FilesWrapper>
              <SendButton>
                <Button
                  text={t("fileUpload.buttons.send")}
                  color="blue"
                  onClick={() => processUpload()}
                  disabled={!canUpload}
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
