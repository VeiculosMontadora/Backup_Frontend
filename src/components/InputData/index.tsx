import { useState } from "react"
import { InputAdornment } from "@mui/material"
import CopyInput from "../../assets/images/CopyInput.png"
import { InputProps } from "./types"
import { background, lightGray } from "../../styles/colors"
import { Label, StyledInput } from "./styles"

function InputComponent({ label, data }: InputProps) {
  const [value, setValue] = useState(data || "")
  const [clicked, setClicked] = useState(false)
  const cursor = data ? "pointer" : "auto"

  const backgroundColor = () => {
    switch (true) {
      case clicked:
        return background

      case !!data:
        return "transparent"

      default:
        return lightGray
    }
  }

  const handleCopyClick = async () => {
    try {
      if (!data) return

      const validStates = ["granted", "prompt"]
      const { state } = await navigator.permissions.query({
        name: "clipboard-write" as PermissionName,
      })

      if (!validStates.includes(state))
        throw new Error("Permission not granted to copy text.")

      await navigator.clipboard.writeText(value)
      setClicked(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to copy text: ", error)
    }
  }

  const handleInputFocus = () => {
    setClicked(false)
  }

  return (
    <div style={{ position: "relative" }}>
      <Label variant="h4">{label}</Label>
      <StyledInput
        type="text"
        value={data}
        inputMode="text"
        cursor={cursor}
        onChange={(event) => setValue(event.target.value)}
        onClick={handleCopyClick}
        onKeyDown={handleCopyClick}
        InputProps={{
          style: {
            backgroundColor: backgroundColor(),
            pointerEvents: !data ? "none" : "auto",
          },
          readOnly: true,
          onFocus: handleInputFocus,
          endAdornment: (
            <InputAdornment position="end">
              <img
                src={CopyInput}
                alt="Copiar"
                style={{
                  cursor,
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
