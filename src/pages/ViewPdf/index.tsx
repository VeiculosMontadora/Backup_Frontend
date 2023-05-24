import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { PDF } from "../../components/PDFList/types"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"
import TabsView from "../../components/TabsView"
import useGet from "../../hooks/useGet"
import { PageWrapper, SaveButton } from "./styles"
import GlobalStyle from "../../styles/styles"

const ViewPdf = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { get, result, loading } = useGet()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPDFclick = (_file: PDF) => {
    // updateList(file)
    // TODO?: maybe update routing
    // navigate(`/viewPDF/${PDF.name}`)
  }

  // TODO: Change to usePDFs hook
  /* const onPDFchange = (file: PDF) => {
    updateList(file)
  } */

  const onHomeClick = () => {
    navigate("/")
    // TODO: Change to open modal
  }

  useEffect(() => {
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <HomeButton onClick={onHomeClick} />
      <PDFList result={result} loading={loading} />
      <div>
        <TabsView
          veiculos={[
            {
              desc_cat: {
                valor: "COMPASS SPORT T270",
                copiado: false,
              },
              desc_renavam: {
                valor: "SPORT T270",
                copiado: false,
              },
              sigla: {
                valor: "67515M1",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$174.990,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "T270 Turbo Flex",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "185",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Flex",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
            {
              desc_cat: {
                valor: "COMPASS LONGITUDE T270",
                copiado: false,
              },
              desc_renavam: {
                valor: "LONGITUDE T270",
                copiado: false,
              },
              sigla: {
                valor: "67512M1",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$186.690,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "T270 Turbo Flex",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "185",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Flex",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
            {
              desc_cat: {
                valor: "COMPASS LIMITED T270",
                copiado: false,
              },
              desc_renavam: {
                valor: "LIMITED T270",
                copiado: false,
              },
              sigla: {
                valor: "67516M1",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$209.490,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "T270 Turbo Flex",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "185",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Flex",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
            {
              desc_cat: {
                valor: "COMPASS SERIE S T270",
                copiado: false,
              },
              desc_renavam: {
                valor: "SERIE S T270",
                copiado: false,
              },
              sigla: {
                valor: "6751CM1",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$233.790,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "T270 Turbo Flex",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "185",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Flex",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
            {
              desc_cat: {
                valor: "COMPASS LONGITUDE TD350 4X4",
                copiado: false,
              },
              desc_renavam: {
                valor: "LONGITUDE TD350 4X4",
                copiado: false,
              },
              sigla: {
                valor: "6751291",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$232.390,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "TD350 Turbo Diesel",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "170",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Diesel",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
            {
              desc_cat: {
                valor: "COMPASS LIMITED TD350 4X4",
                copiado: false,
              },
              desc_renavam: {
                valor: "LIMITED TD350 4X4",
                copiado: false,
              },
              sigla: {
                valor: "6751391",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$252.790,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "TD350 Turbo Diesel",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "170",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Diesel",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
            {
              desc_cat: {
                valor: "COMPASS TRAILHAWK TD350 4X4",
                copiado: false,
              },
              desc_renavam: {
                valor: "TRAILHAWK TD350 4X4",
                copiado: false,
              },
              sigla: {
                valor: "6751191",
                copiado: false,
              },
              pacote_def_modelo: {
                valor: "",
                copiado: false,
              },
              versao: {
                valor: "",
                copiado: false,
              },
              preco: {
                valor: "R$252.790,00",
                copiado: false,
              },
              ano: {
                valor: "2023",
                copiado: false,
              },
              marca: {
                valor: "JEEP",
                copiado: false,
              },
              linha: {
                valor: "COMPASS",
                copiado: false,
              },
              motor: {
                modelo: {
                  valor: "TD350 Turbo Diesel",
                  copiado: false,
                },
                cilindradas: {
                  valor: "",
                  copiado: false,
                },
                nro_cilindradas: {
                  valor: "",
                  copiado: false,
                },
                combustiveis: [
                  {
                    potencia: {
                      valor: "170",
                      copiado: false,
                    },
                    tipo_combustivel: {
                      valor: "Diesel",
                      copiado: false,
                    },
                  },
                ],
              },
              carga: {
                valor: "",
                copiado: false,
              },
              num_passag: {
                valor: "",
                copiado: false,
              },
              num_portas: {
                valor: "",
                copiado: false,
              },
              num_renavam: {
                valor: "",
                copiado: false,
              },
              producao: {
                valor: "",
                copiado: false,
              },
              desc_vendas: {
                valor: "",
                copiado: false,
              },
            },
          ]}
        />
        <SaveButton variant="contained" color="primary">
          {t("view.saveButton")}
        </SaveButton>
      </div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
