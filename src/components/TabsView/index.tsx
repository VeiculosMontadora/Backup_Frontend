import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { TabsWrapper, PanelWrapper } from "./styles"
import { Veiculo } from "../PDFList/types"
import InputComponent from "../InputData"

const TabsView = ({ veiculos }: { veiculos: Veiculo[] }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
      }}
    >
      <TabsWrapper position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {veiculos.map(({ desc_cat: { valor } }, index) => (
            <Tab
              key={valor}
              style={
                value === index
                  ? { backgroundColor: "#fff", color: "#000" }
                  : {}
              }
              label={valor}
            />
          ))}
        </Tabs>
      </TabsWrapper>
      <PanelWrapper>
        {Object.values(veiculos[value]).map((vehicle) => (
          <InputComponent
            key={vehicle.valor + Math.random()}
            data={vehicle.valor}
          />
        ))}
      </PanelWrapper>
    </Box>
  )
}

export default TabsView
