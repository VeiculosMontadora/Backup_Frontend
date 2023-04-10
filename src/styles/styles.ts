import { createGlobalStyle } from "styled-components"
import { background } from "./colors"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: ${background};
  }

  html, body, #root {
    height: 100%;
  }
`
