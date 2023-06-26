import { useCallback, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Arrow from "@mui/icons-material/ArrowCircleRight"
import { Veiculo } from "../../models/PDF"
import InputComponent from "../InputData"
import { ViewPDFContext } from "../../contexts/ViewPDF.context"
import {
  TwoItemsRows,
  TabsWrapper,
  PanelWrapper,
  ArrowWrapper,
  ThreeItemsRows,
  FiveItemsRows,
  Carinha,
  SaveButton,
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
    setValue(newValue)
    setCurrentVehicle(veiculos[newValue])
  }

  const Grid = useCallback(() => {
    return (
      <>
        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.model")}
            data=""
            copied={false}
          />
          <InputComponent
            label={t("viewPDF.input.descRenavan")}
            data={currentVehicle?.desc_renavam?.valor}
            copied={currentVehicle?.desc_renavam?.copiado}
          />
        </TwoItemsRows>

        <InputComponent
          label={t("viewPDF.input.descCat")}
          data={currentVehicle?.desc_cat?.valor}
          copied={currentVehicle?.desc_cat?.copiado}
        />

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.acronym")}
            data={currentVehicle?.sigla?.valor}
            copied={currentVehicle?.sigla?.copiado}
          />
          <InputComponent
            label={t("viewPDF.input.descModelo")}
            data={currentVehicle?.pacote_def_modelo?.valor}
            copied={currentVehicle?.pacote_def_modelo?.copiado}
          />
        </TwoItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.versao")}
            data={currentVehicle?.versao?.valor}
            copied={currentVehicle?.versao?.copiado}
          />
          <InputComponent label="" data="" copied={false} />
        </TwoItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.ano")}
            data={currentVehicle?.ano?.valor}
            copied={currentVehicle?.ano?.copiado}
          />
          <InputComponent label="" data="" copied={false} />
        </TwoItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.marca")}
            data={currentVehicle?.marca?.valor}
            copied={currentVehicle?.marca?.copiado}
          />
          <InputComponent label="" data="" copied={false} />
        </TwoItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.linha")}
            data={currentVehicle?.linha?.valor}
            copied={currentVehicle?.linha?.copiado}
          />
          <InputComponent label="" data="" copied={false} />
        </TwoItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.carrocaria")}
            data=""
            copied={false}
          />
          <InputComponent label="" data="" copied={false} />
        </TwoItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.segmento")}
            data=""
            copied={false}
          />
          <InputComponent label="" data="" copied={false} />
        </TwoItemsRows>

        <FiveItemsRows>
          <InputComponent
            label={t("viewPDF.input.motor")}
            data={currentVehicle?.motor?.modelo?.valor}
            copied={currentVehicle?.motor?.modelo.copiado}
          />
          <InputComponent
            label={t("viewPDF.input.cilindradas")}
            data={currentVehicle?.motor?.cilindradas?.valor}
            copied={currentVehicle?.motor?.cilindradas.copiado}
          />
          <InputComponent
            label={t("viewPDF.input.nroCilindros")}
            data={currentVehicle?.motor?.nro_cilindradas?.valor}
            copied={currentVehicle?.motor?.nro_cilindradas.copiado}
            small
          />
          <InputComponent
            label={t("viewPDF.input.potencia")}
            data={
              currentVehicle?.motor?.combustiveis?.[0] === undefined
                ? ""
                : currentVehicle?.motor?.combustiveis?.[0].potencia?.valor
            }
            copied={
              currentVehicle?.motor?.combustiveis?.[0] === undefined
                ? false
                : currentVehicle?.motor?.combustiveis?.[0].potencia?.copiado
            }
          />
          <InputComponent
            label={t("viewPDF.input.tipoCombustivel")}
            data={
              currentVehicle?.motor?.combustiveis?.[0] === undefined
                ? ""
                : currentVehicle?.motor?.combustiveis?.[0].tipo_combustivel
                    ?.valor
            }
            copied={
              currentVehicle?.motor?.combustiveis?.[0] === undefined
                ? false
                : currentVehicle?.motor?.combustiveis?.[0].tipo_combustivel
                    ?.copiado
            }
            small
          />
        </FiveItemsRows>

        <FiveItemsRows>
          <InputComponent
            label={t("viewPDF.input.freteEspecfico")}
            data=""
            copied={false}
          />
          <InputComponent label="" data="" copied={false} />
          <InputComponent
            label={t("viewPDF.input.valor")}
            data=""
            copied={false}
          />
          <InputComponent
            label={t("viewPDF.input.potencia1")}
            data=""
            copied={false}
          />
          <InputComponent label="" data="" copied={false} />
        </FiveItemsRows>

        <ThreeItemsRows>
          <InputComponent
            label={t("viewPDF.input.carga")}
            data={currentVehicle?.carga?.valor}
            copied={currentVehicle?.carga?.copiado}
          />
          <InputComponent
            label={t("viewPDF.input.numPassag")}
            data={currentVehicle?.num_passag?.valor}
            copied={currentVehicle?.num_passag?.copiado}
          />
          <InputComponent
            label={t("viewPDF.input.numPortas")}
            data={currentVehicle?.num_portas?.valor}
            copied={currentVehicle?.num_portas?.copiado}
          />
        </ThreeItemsRows>

        <TwoItemsRows>
          <InputComponent
            label={t("viewPDF.input.numRenavam")}
            data={currentVehicle?.num_renavam?.valor}
            copied={currentVehicle?.num_renavam?.copiado}
            small
          />
          <InputComponent
            label={t("viewPDF.input.especie")}
            data=""
            copied={false}
          />
        </TwoItemsRows>

        <ThreeItemsRows>
          <InputComponent
            label={t("viewPDF.input.linhaServico")}
            data=""
            copied={false}
          />
          <InputComponent label="" data="" copied={false} />
          <InputComponent
            label={t("viewPDF.input.codFIPE")}
            data=""
            copied={false}
          />
        </ThreeItemsRows>

        <ThreeItemsRows>
          <InputComponent
            label={t("viewPDF.input.aliqIPI")}
            data=""
            copied={false}
          />
          <InputComponent
            label={t("viewPDF.input.prazoGarantia")}
            data=""
            copied={false}
          />
          <InputComponent
            label={t("viewPDF.input.kmGarantia")}
            data=""
            copied={false}
          />
        </ThreeItemsRows>
      </>
    )
  }, [t, currentVehicle])

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TabsWrapper position="static">
        {!!veiculos?.length && (
          <Carinha>
            <div>
              <ArrowWrapper>
                <Arrow
                  data-testid="tabs-view-back-arrow"
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
                  data-testid="tabs-view-forward-arrow"
                  color="primary"
                  onClick={() => {
                    const newValue =
                      value === veiculos.length - 1 ? value : value + 1
                    setValue(newValue)
                    setCurrentVehicle(veiculos[newValue])
                  }}
                />
              </ArrowWrapper>
            </div>
          </Carinha>
        )}
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
        <Grid />
      </PanelWrapper>
      <SaveButton variant="contained" color="primary" data-testid="save-button">
        {t("view.saveButton")}
      </SaveButton>
    </Box>
  )
}

export default TabsView
