import { useState } from "react"
import TextField from "@mui/material/TextField"
import { blue } from "@mui/material/colors"
import { InputAdornment } from "@mui/material"
import CopyInput from "../../assets/images/CopyInput.png"
import Label from "./styles"

type InputProps = {
  label: string
  data?: string
}

function InputComponent({ label, data }: InputProps) {
  const [value, setValue] = useState(data || "")
  // const [copied, setCopied] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value)
    // setCopied(true)
    setClicked(true)
  }

  const handleInputFocus = () => {
    setClicked(false)
  }

  return (
    <div style={{ position: "relative" }}>
      <Label variant="h4">{label}</Label>
      <TextField
        type="text"
        value={data}
        inputMode="text"
        onChange={(event) => setValue(event.target.value)}
        onClick={handleCopyClick}
        onKeyDown={handleCopyClick}
        style={{ width: "100%" }}
        InputProps={{
          style: {
            backgroundColor: clicked ? blue[50] : "transparent",
          },
          readOnly: true,
          onFocus: handleInputFocus,
          endAdornment: (
            <InputAdornment position="end">
              <img
                src={CopyInput}
                alt="Copiar"
                style={{
                  cursor: "pointer",
                  marginLeft: "8px",
                  width: "30px",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default InputComponent
