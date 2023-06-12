import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Arrow from "@mui/icons-material/ArrowCircleRight"
import Typography from "@mui/material/Typography/Typography"
import { Veiculo } from "../../models/PDF"
import InputComponent from "../InputData"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"
import {
  TwoItemsRows,
  TabsWrapper,
  PanelWrapper,
  ArrowsBar,
  ArrowWrapper,
  ThreeItemsRows,
  FiveItemsRows,
} from "./styles"

const TabsView = () => {
  const { t } = useTranslation()
  const { veiculos } = useContext(ViewPDFContext)

  const [value, setValue] = useState<number>(0)
  const [currentVehicle, setCurrentVehicle] = useState<Veiculo>({} as Veiculo)

  useEffect(() => {
    if (veiculos?.length > 0) {
      setCurrentVehicle(veiculos[0])
      setValue(0)
    }
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
        maxHeight: "1080px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TabsWrapper position="static">
        <ArrowsBar>
          {!!veiculos?.length && (
            <ArrowsBar>
              <ArrowWrapper>
                <Arrow
                  color="primary"
                  style={{ transform: "rotate(180deg)" }}
                  onClick={() => {
                    const newValue = value - 1 < 0 ? 0 : value - 1
                    setValue(newValue)
                    setCurrentVehicle(veiculos[newValue])
                  }}
                />
              </ArrowWrapper>
              <ArrowWrapper>
                <Arrow
                  color="primary"
                  onClick={() => {
                    const newValue =
                      value === veiculos.length - 1 ? value : value + 1
                    setValue(newValue)
                    setCurrentVehicle(veiculos[newValue])
                  }}
                />
              </ArrowWrapper>
            </ArrowsBar>
          )}
        </ArrowsBar>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          data-testid="tabs-wrapper"
        >
          {veiculos?.map(({ desc_cat: { valor } }, index) => (
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
        {!veiculos?.length || !currentVehicle ? (
          <Typography>{t("viewPDF.tab.noSelectedVehicle")}</Typography>
        ) : (
          <>
            <TwoItemsRows>
              <InputComponent label={t("viewPDF.input.model")} data="" />

              <InputComponent
                label={t("viewPDF.input.descRenavan")}
                data={currentVehicle.desc_renavam?.valor}
              />
            </TwoItemsRows>

            <InputComponent
              label={t("viewPDF.input.descCat")}
              data={currentVehicle.desc_cat?.valor}
            />
            <TwoItemsRows>
              <InputComponent
                label={t("viewPDF.input.acronym")}
                data={currentVehicle.sigla?.valor}
              />

              <InputComponent
                label={t("viewPDF.input.descModelo")}
                data={currentVehicle.pacote_def_modelo?.valor}
              />
            </TwoItemsRows>

            <TwoItemsRows>
              <InputComponent
                label={t("viewPDF.input.versao")}
                data={currentVehicle.versao?.valor}
              />

              <InputComponent label="" data="" />
            </TwoItemsRows>

            <TwoItemsRows>
              <InputComponent
                label={t("viewPDF.input.ano")}
                data={currentVehicle.ano?.valor}
              />

              <InputComponent label="" data="" />
            </TwoItemsRows>

            <TwoItemsRows>
              <InputComponent
                label={t("viewPDF.input.marca")}
                data={currentVehicle.marca?.valor}
              />

              <InputComponent label="" data="" />
            </TwoItemsRows>

            <TwoItemsRows>
              <InputComponent
                label={t("viewPDF.input.linha")}
                data={currentVehicle.linha?.valor}
              />

              <InputComponent label="" data="" />
            </TwoItemsRows>

            <TwoItemsRows>
              <InputComponent label={t("viewPDF.input.carrocaria")} data="" />

              <InputComponent label="" data="" />
            </TwoItemsRows>

            <TwoItemsRows>
              <InputComponent label={t("viewPDF.input.segmento")} data="" />

              <InputComponent label="" data="" />
            </TwoItemsRows>

            <FiveItemsRows>
              <InputComponent
                label={t("viewPDF.input.motor")}
                data={currentVehicle.motor?.modelo?.valor}
              />

              <InputComponent
                label={t("viewPDF.input.cilindradas")}
                data={currentVehicle.motor?.cilindradas?.valor}
              />

              <InputComponent
                label={t("viewPDF.input.nroCilindros")}
                data={currentVehicle.motor?.nro_cilindradas?.valor}
                small
              />

              <InputComponent
                label={t("viewPDF.input.potencia")}
                data={currentVehicle.motor?.combustiveis?.[0].potencia?.valor}
              />

              <InputComponent
                label={t("viewPDF.input.tipoCombustivel")}
                data={
                  currentVehicle.motor?.combustiveis?.[0].tipo_combustivel
                    ?.valor
                }
                small
              />
            </FiveItemsRows>

            <FiveItemsRows>
              <InputComponent
                label={t("viewPDF.input.freteEspecfico")}
                data=""
              />

              <InputComponent label="" data="" />

              <InputComponent label={t("viewPDF.input.valor")} data="" />

              <InputComponent label={t("viewPDF.input.potencia1")} data="" />

              <InputComponent label="" data="" />
            </FiveItemsRows>

            <ThreeItemsRows>
              <InputComponent
                label={t("viewPDF.input.carga")}
                data={currentVehicle.carga?.valor}
              />

              <InputComponent
                label={t("viewPDF.input.numPassag")}
                data={currentVehicle.num_passag?.valor}
              />

              <InputComponent
                label={t("viewPDF.input.numPortas")}
                data={currentVehicle.num_portas?.valor}
              />
            </ThreeItemsRows>

            <TwoItemsRows>
              <InputComponent
                label={t("viewPDF.input.numRenavam")}
                data={currentVehicle.num_renavam?.valor}
                small
              />

              <InputComponent label={t("viewPDF.input.especie")} data="" />
            </TwoItemsRows>

            <ThreeItemsRows>
              <InputComponent label={t("viewPDF.input.linhaServico")} data="" />

              <InputComponent label="" data="" />

              <InputComponent label={t("viewPDF.input.codFIPE")} data="" />
            </ThreeItemsRows>

            <ThreeItemsRows>
              <InputComponent label={t("viewPDF.input.aliqIPI")} data="" />

              <InputComponent
                label={t("viewPDF.input.prazoGarantia")}
                data=""
              />

              <InputComponent label={t("viewPDF.input.kmGarantia")} data="" />
            </ThreeItemsRows>
          </>
        )}
      </PanelWrapper>
    </Box>
  )
}

export default TabsView
