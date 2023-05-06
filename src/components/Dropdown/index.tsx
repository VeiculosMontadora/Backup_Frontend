import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { DropdownProps } from "./types"
import { DropdownArea, Item } from "./styles"
import { lightGray, text } from "../../styles/colors"

const Dropdown = ({ fileName, index, setUploadedFiles }: DropdownProps) => {
  const [carManufacturer, setCarManufacturer] = useState<string>("")
  const { t } = useTranslation()

  const setFiles = useCallback(
    (name: string) => {
      setCarManufacturer(name)

      setUploadedFiles((prevState: any) => {
        const newItems = [...prevState]
        newItems[index].type = name
        return newItems
      })
    },
    [index, setUploadedFiles]
  )

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setFiles(event.target.value)
    },
    [setFiles]
  )

  useEffect(() => {
    const checkCarManufacturer = () => {
      const name = fileName?.toLowerCase()

      if (name?.includes("jeep")) setFiles("jeep")

      if (name?.includes("chev")) setFiles("chev")
    }
    checkCarManufacturer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFiles])

  return (
    <DropdownArea>
      <FormControl sx={{ m: 1 }} fullWidth size="small">
        <InputLabel id="select-manufacturer">
          {t("fileUpload.selectAssembler")}
        </InputLabel>
        <Select
          labelId="select-manufacturer"
          id="select-manufacturer"
          value={carManufacturer}
          onChange={handleChange}
          label={t("fileUpload.selectAssembler")}
          sx={{ background: lightGray, color: text }}
        >
          <Item value="jeep">{t("fileUpload.pdfType.jeep")}</Item>
          <Item value="chev">{t("fileUpload.pdfType.chev")}</Item>
          <Item value="others">{t("fileUpload.pdfType.others")}</Item>
        </Select>
      </FormControl>
    </DropdownArea>
  )
}

export default Dropdown
