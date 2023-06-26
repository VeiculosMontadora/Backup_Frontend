import { useCallback, useMemo, useState } from "react"
import { InputAdornment } from "@mui/material"
import { useTranslation } from "react-i18next"
import CopyInput from "../../assets/images/CopyInput.png"
import { InputProps } from "./types"
import { background, lightGray } from "../../styles/colors"
import { Label, StyledInput } from "./styles"

const InputComponent = ({ label, data, copied, small = false }: InputProps) => {
  const [value, setValue] = useState(data)
  const [clicked, setClicked] = useState(copied)
  const cursor = useMemo(() => (data ? "pointer" : "auto"), [data])
  const nonClickable = useMemo(() => !data, [data])

  const { t } = useTranslation()

  const backgroundColor = useCallback(() => {
    switch (true) {
      case clicked:
        return background

      case !!data:
        return "transparent"

      default:
        return lightGray
    }
  }, [clicked, data])

  const handleCopyClick = useCallback(async () => {
    try {
      if (!data) return

      const validStates = ["granted", "prompt"]
      const { state } = await navigator.permissions.query({
        name: "clipboard-write" as PermissionName,
      })

      if (!validStates.includes(state)) return

      await navigator.clipboard.writeText(value)
      setClicked(true)
      // Obs: log necessário para copiar (?)
      // TODO: Verificar
      // eslint-disable-next-line no-console
      console.log()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Erro ao copiar: ", error)
    }
  }, [data, value])

  return (
    <div style={{ position: "relative" }}>
      <Label small={small} variant="h4" data-testid="input-data-label">
        {label}
      </Label>
      <StyledInput
        data-testid={`input-data-${label}`}
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
            pointerEvents: nonClickable ? "none" : "auto",
          },
          readOnly: true,
          onFocus: () => setClicked(false),
          endAdornment: (
            <InputAdornment position="end">
              <img
                src={CopyInput}
                alt={t("viewPDF.input.copy") || ""}
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
