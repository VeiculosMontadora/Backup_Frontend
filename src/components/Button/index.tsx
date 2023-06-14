import { Button as Btn } from "@mui/material"
import ButtonProps from "./types"

const Button = ({ text, color, onClick, disabled }: ButtonProps) => {
  const background = color === "blue" ? "primary" : "error"

  return (
    <Btn
      color={background}
      variant="contained"
      onClick={onClick}
      style={{ textTransform: "uppercase", padding: "15px", width: "85%" }}
      disabled={disabled || false}
      data-testid="custom-button"
    >
      {text}
    </Btn>
  )
}

export default Button
