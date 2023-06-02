import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography/Typography"
import InputComponent from "../InputData"
import { Veiculo } from "../../models/PDF"
import { TabsWrapper, PanelWrapper } from "./styles"

interface TabsViewProps {
  veiculos: Veiculo[]
}

const TabsView = ({ veiculos }: TabsViewProps) => {
  const { t } = useTranslation()

  const [value, setValue] = useState<number>(0)
  const [currentVehicle, setCurrentVehicle] = useState<Veiculo>({} as Veiculo)

  useEffect(() => {
    if (veiculos?.length > 0) setCurrentVehicle(veiculos[0])
  }, [veiculos])

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue > veiculos.length - 1 ? 0 : newValue)
    setCurrentVehicle(veiculos[newValue])
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
        {!veiculos.length ? (
          <Typography>{t("viewPDF.tab.noSelectedVehicle")}</Typography>
        ) : (
          Object.values(currentVehicle).map((vehicle, index) => (
            <InputComponent
              key={vehicle.valor + Math.random()}
              label={Object.keys(currentVehicle)
                [index].replace(/_/g, " ")
                .replace(/\w\S*/g, (w) =>
                  w.replace(/^\w/, (c) => c.toUpperCase())
                )}
              data={vehicle.valor}
            />
          ))
        )}
      </PanelWrapper>
    </Box>
  )
}

export default TabsView
