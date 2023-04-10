import { Button as Btn } from "@mui/material"

type ButtonProps = {
  text: string
  color: "blue" | "red"
  onClick: () => void
  disabled?: boolean
}

const Button = ({ text, color, onClick, disabled }: ButtonProps) => {
  const background = color === "blue" ? "primary" : "error"

  return (
    <Btn
      color={background}
      variant="contained"
      onClick={onClick}
      style={{ textTransform: "uppercase", padding: "15px", width: "85%" }}
      disabled={disabled || false}
    >
      {text}
    </Btn>
  )
}

export default Button
