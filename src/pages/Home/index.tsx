import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import Dropdown from "../../components/Dropdown"
import HomeIcon from "../../assets/images/HomeIcon.svg"
import { PdfFile, Request } from "./types"
import GlobalStyle, {
  Container,
  Content,
  HeaderTitle,
  FilesWrapper,
} from "../../styles/styles"
import { SubTitle, FilesRow, SendButton, HomeButton } from "./styles"

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<PdfFile[]>([])
  const [canUpload, setCanUpload] = useState<boolean>(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const processUpload = useCallback(() => {
    if (!canUpload) return

    const requests: Request[] = []
    uploadedFiles.forEach((file) => {
      requests.push({
        pdf: file.pdf,
        type: file.type,
        error: false,
        loading: true,
      })
    })
    navigate("/process", { state: { requests } })
  }, [canUpload, navigate, uploadedFiles])

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
        <HomeButton to="/view" data-testid="home-button">
          <img src={HomeIcon} alt="Ir para a página principal" />
        </HomeButton>
        <HeaderTitle variant="h6" data-testid="home-title">
          {t("fileUpload.title")}
        </HeaderTitle>
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
                  <FilesRow key={file.pdf.name + file.pdf.size}>
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
      </Content>
      <GlobalStyle />
    </Container>
  )
}

export default Home
