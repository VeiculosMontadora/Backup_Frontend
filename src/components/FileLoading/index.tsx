import { useMemo } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import LinearProgress from "@mui/material/LinearProgress"
import { FileLoadingProps } from "./types"
import LoadingIconSpin from "../LoadingIconSpin"
import { Wrapper, Title, DeleteButton } from "./styles"

const FileLoading = ({
  fileName,
  status,
  isLoaded,
  handleDeleteClick,
}: FileLoadingProps) => {
  const isSpin = status === "downloading"
  const isDeletable = status === "downloaded" && !!handleDeleteClick
  const isBar = status === "uploading"

  // Infinitely scrolling progress for file upload
  const loadingIconBar = useMemo(() => {
    const variant = isLoaded ? "determinate" : "indeterminate"
    return (
      <div className="loading-icon-bar">
        {/* value only affects the display if variant is indeterminate (infinite) */}
        <LinearProgress variant={variant} value={100} />
      </div>
    )
  }, [isLoaded])

  const deleteComponent = useMemo(
    () => (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <DeleteButton data-testid="delete-button" onClick={handleDeleteClick}>
        <DeleteIcon />
      </DeleteButton>
    ),
    [handleDeleteClick]
  )

  return (
    <Wrapper data-status={status} data-testid={`file-${status}-wrapper`}>
      <Title variant="h2" data-testid="file-name">
        {fileName}
      </Title>
      {isSpin && <LoadingIconSpin />}
      {isDeletable && deleteComponent}
      {isBar && loadingIconBar}
    </Wrapper>
  )
}

export default FileLoading
