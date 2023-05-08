import Dropzone from "react-dropzone"
import { useTranslation } from "react-i18next"
import { UploadProps } from "./types"
import {
  BoxArea,
  BoxAreaMessages,
  BoxAreaSubtitle,
  BoxAreaTitle,
  UploadIcon,
} from "./styles"

const Upload = ({ size, uploadedFiles, setUploadedFiles }: UploadProps) => {
  const { t } = useTranslation()

  const renderDragMessage = (isDragActive: any, isDragReject: any) => {
    if (!isDragActive) {
      return (
        <BoxAreaTitle variant="h6">
          {t("fileUpload.dropzone.title")}
          <b>{t("fileUpload.dropzone.titleURL")}</b>
        </BoxAreaTitle>
      )
    }
    if (isDragReject) {
      return (
        <BoxAreaTitle variant="h6" type="error">
          {t("fileUpload.dropzone.rejected")}
        </BoxAreaTitle>
      )
    }

    return (
      <BoxAreaTitle variant="h6" type="success">
        {t("fileUpload.dropzone.accepted")}
      </BoxAreaTitle>
    )
  }

  return (
    <Dropzone
      accept={{
        "application/pdf": [".pdf"],
      }}
      onDropAccepted={(files: File[]) => {
        // Check for duplicate files
        files.forEach((file) => {
          if (uploadedFiles.length > 0) {
            const fileAlreadyAdded = !!uploadedFiles.find(
              (item) => item.pdf.name === file.name
            )
            if (fileAlreadyAdded) {
              return
            }
          }
          setUploadedFiles((prev: any) => [...prev, { pdf: file, type: "" }])
        })
      }}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }: any) => (
        <BoxArea
          {...getRootProps()}
          size={size || undefined}
          isDragActive={isDragActive}
          isDragRejected={isDragReject}
          type={
            (isDragActive && (isDragReject ? "error" : "success")) || undefined
          }
        >
          <input {...getInputProps()} />
          <BoxAreaMessages>
            <UploadIcon />
            {renderDragMessage(isDragActive, isDragReject)}
            <BoxAreaSubtitle variant="body1">
              {t("fileUpload.dropzone.warning")}
            </BoxAreaSubtitle>
          </BoxAreaMessages>
        </BoxArea>
      )}
    </Dropzone>
  )
}

export default Upload
