export const BASE_URL =
  "https://ec2-18-117-98-169.us-east-2.compute.amazonaws.com/"

export const PAGES = {
  VIEW: "view",
}

export const TIMEOUT_BACK = 12000

const pdfsFolder = "cypress/fixtures/pdfs/"

export const PDFSFOLDER = "cypress/fixtures/pdfs/"

export const FILES = {
  CHEV_TRACKER: `${pdfsFolder}2023_03_07 - MEV Chevrolet Tracker MY24 (2).pdf`,
  JEEP_COMPASS: `${pdfsFolder}LP_Compass_Test.pdf`,
  JEEP_RENEGADE: `${pdfsFolder}LP Jeep Nacional Renegade - Dez 22 (1).pdf`,
  TEST: "cypress/fixtures/test.txt",
}

export const PDF_NAMES = {
  CHEV_TRACKER: "2023_03_07 - MEV Chevrolet Tracker MY24 (2).pdf",
  JEEP_COMPASS: "LP_Compass_Abr23.pdf",
  JEEP_RENEGADE: "LP Jeep Nacional Renegade - Dez 22 (1).pdf",
}

export const TEXTS = {
  CHEV: "Chevrolet (GM)",
  HEADER: "Extração de PDF - Sinosserra",
  JEEP: "Jeep",
}

export const MESSAGES = {
  EXTRACTING: "Fazendo a extração de dados...",
  EXTRACTION_ERROR: "Erro na extração!",
  EXTRACTION_SUCCESS: "Extração concluída!",
  SUPORTED_FILE: "Arquivo suportadoO formato .pdf é obrigatório",
  UNSUPORTED_FILE: "Arquivo não suportadoO formato .pdf é obrigatório",
}

export const COMPONENTS_ID = {
  HOME_TITLE: "[data-testid='home-title']",
  PDF_SEND_ICON: "[data-testid='FileUploadIcon']",
  HOME_BUTTON: "[data-testid='home-button']",
  FILE_NAME: "[data-testid='file-name']",
  SELECT_MANUFACTURER_BUTTON: "[data-testid='select-manufacturer']",
  SELECT_JEEP: "[data-testid='select-manufacturer-jeep']",
  SELECT_CHEV: "[data-testid='select-manufacturer-chevrolet']",
  SELECT_OUTRAS: "[data-testid='select-manufacturer-others']",
  DELETE_BUTTON: "[data-testid='delete-button']",
  SEND_BUTTON: "[data-testid='custom-button']",
  UPLOAD_PAGE_BUTTON: "[data-testid='upload-button']",
  FORWARD_ARROW: "[data-testid='tabs-view-forward-arrow']",
  BACK_ARROW: "[data-testid='tabs-view-back-arrow']",
  TABS_VIEW: "[data-testid='tabs-wrapper']",
  MODELO_INPUT: "[data-testid='input-data-Modelo']",
  DESC_RENAVAM_INPUT: "[data-testid='input-data-Desc Renavan']",
  DESCRICAO_INPUT: "[data-testid='input-data-Descrição']",
  SIGLA_INPUT: "[data-testid='input-data-Sigla']",
  ANO_FABRICACAO_INPUT: "[data-testid='input-data-Ano']",
  MARCA_INPUT: "[data-testid='input-data-Marca']",
  LINHA_INPUT: "[data-testid='input-data-Linha']",
  CARROCARIA_INPUT: "[data-testid='input-data-Carroçaria']",
  SEGMENTO_INPUT: "[data-testid='input-data-Segmento']",
  MOTOR_INPUT: "[data-testid='input-data-Motor']",
  CILINDRADAS_INPUT: "[data-testid='input-data-Cilindradas']",
  NUM_CILINDROS_INPUT: "[data-testid='input-data-Nro Cilindros']",
  POTENCIA_INPUT: "[data-testid='input-data-Potência']",
  COMBUSTIVEL_INPUT: "[data-testid='input-data-Tipo Combustível']",
  NUM_PASSAGEIROS_INPUT: "[data-testid='input-data-Num Passag']",
  NUM_RENAVAM_INPUT: "[data-testid='input-data-Num do Renavam']",
  PACOTE_DEF_MODELO: "[data-testid='input-data-Pacote Def. Modelo']",
  VERSAO_INPUT: "[data-testid='input-data-Versão']",
}
