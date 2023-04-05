import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress"
import LinearProgress from "@mui/material/LinearProgress"
import { Wrapper, Title, DeleteButton, MockWrapper } from "./styles"
import { FileLoadingProps, LoadingIconBarProps } from "./types"
import { blue } from "../../styles/colors"

// Infinitely spinning progress for file download
const LoadingIconSpin = () => (
  <CircularProgress
    // indeterminate = scrolls indefinetly
    variant="indeterminate"
    sx={{
      color: { blue },
      animationDuration: "1100ms",
      [`& .${circularProgressClasses.circle}`]: {
        // Define if edges of the spinner are rounded or not
        strokeLinecap: "round",
      },
    }}
    size={30}
    thickness={4}
  />
)

// Infinitely scrolling progress for file upload
const LoadingIconBar = ({ isLoaded }: LoadingIconBarProps) => {
  const variant = isLoaded ? "determinate" : "indeterminate"
  return (
    <div className="loading-icon-bar">
      {/* value only affects the display if variant is indeterminate (infinite) */}
      <LinearProgress variant={variant} value={100} />
    </div>
  )
}

const DeleteComponent = ({ handleClick }: { handleClick: () => void }) => (
  <DeleteButton onClick={handleClick}>
    <DeleteIcon />
  </DeleteButton>
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

  return (
    <Wrapper data-status={status}>
      <Title variant="h2">{fileName}</Title>
      {isSpin && <LoadingIconSpin />}
      {isDeletable && <DeleteComponent handleClick={handleDeleteClick} />}
      {isBar && <LoadingIconBar isLoaded={!!isLoaded} />}
    </Wrapper>
  )
}

export default FileLoading

// Just for showcase, to be deleted when approved
export const MockFiles = () => {
  const [isShown, setIsShown] = useState(true)
  function handleDeleteClick() {
    setIsShown(false)
  }

  return (
    <MockWrapper>
      <FileLoading
        fileName="LP Jeep Nacional Commander - Dez 22.pdf"
        status="downloading"
      />

      {isShown && (
        <FileLoading
          fileName="LP Jeep Nacional Commander - Dez 22.pdf"
          status="downloaded"
          handleDeleteClick={handleDeleteClick}
        />
      )}

      <FileLoading
        fileName="LP Jeep Nacional Commander - Dez 22.pdf"
        status="uploading"
      />

      <FileLoading
        fileName="LP Jeep Nacional Commander - Dez 22.pdf"
        status="uploading"
        isLoaded
      />

      <FileLoading
        fileName="LP Jeep Nacional Commander - Dez 22.pdf"
        status="uploaded"
      />
    </MockWrapper>
  )
}
