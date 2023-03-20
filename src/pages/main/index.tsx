import { MenuItem } from "@mui/material"
import { App, CustomSelect } from "./styles"

const Main = () => {
  return (
    <App>
      <p>main page</p>
      <CustomSelect
        data-testid="custom-select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={{}}
        label="Age"
        onChange={() => {}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomSelect>
    </App>
  )
}

export default Main
