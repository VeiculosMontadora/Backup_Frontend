import { useMemo } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress"
import LinearProgress from "@mui/material/LinearProgress"
import { FileLoadingProps, LoadingIconSpinProps } from "./types"
import { blue } from "../../styles/colors"
import { Wrapper, Title, DeleteButton } from "./styles"

// Infinitely spinning progress for file download
export const LoadingIconSpin = ({
  animationDuration = "1100ms",
  size = 30,
  thickness = 4,
}: Partial<LoadingIconSpinProps>) => (
  <CircularProgress
    // indeterminate = scrolls indefinetly
    variant="indeterminate"
    sx={{
      color: { blue },
      animationDuration,
      [`& .${circularProgressClasses.circle}`]: {
        // Define if edges of the spinner are rounded or not
        strokeLinecap: "round",
      },
    }}
    size={size}
    thickness={thickness}
  />
)

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
    <Wrapper data-status={status} data-testid={status}>
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
