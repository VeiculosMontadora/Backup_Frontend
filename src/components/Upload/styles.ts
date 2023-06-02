import styled from "styled-components"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import Typography from "@mui/material/Typography"
import {
  background,
  darkGray,
  defaultMessage,
  errorMessage,
  link,
  successMessage,
} from "../../styles/colors"

const messageColors: any = {
  default: defaultMessage,
  error: errorMessage,
  success: successMessage,
}

export const BoxArea = styled.div.attrs({
  className: "dropzone",
})`
  display: flex;
  background-color: ${(props: any) =>
    messageColors[props.type] || messageColors.default};
  align-items: center;
  justify-content: center;
  padding: 4em;
  border: 2px dashed ${background};
  border-radius: 6px;
  cursor: pointer;
  min-height: 10rem;
  height: ${(props: any) => (props.size ? "40%" : "100%")};
  overflow: hidden;
  transition: height 0.2s ease;
`

export const BoxAreaMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BoxAreaTitle = styled(Typography).attrs((props: any) => ({
  type: props.type,
}))`
  && {
    font-size: 1rem;
    font-weight: 700;
  }

  b {
    color: ${link};
    text-decoration: underline;
  }
`

export const BoxAreaSubtitle = styled(Typography)`
  display: flex;
  color: ${darkGray};
  && {
    font-size: 1rem;
    font-weight: 400;
  }
`

export const UploadIcon = styled(FileUploadIcon)`
  && {
    height: 6rem;
    width: 6rem;
  }

  color: ${link};

  @media screen and (max-height: 400px) {
    && {
      display: none;
    }
  }
`
