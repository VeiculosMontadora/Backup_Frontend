import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress"
import LoadingIconSpinProps from "./types"
import { blue } from "../../styles/colors"

const LoadingIconSpin = ({
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

export default LoadingIconSpin
