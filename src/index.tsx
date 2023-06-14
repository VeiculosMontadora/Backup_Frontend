import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Home from "./pages/Home"
import Process from "./pages/Process"
import ViewPdf from "./pages/ViewPdf"
import NotFound from "./pages/NotFound"
import "./hooks/useI18n"
import { ViewPDFProvider } from "./contexts/ViewPDF.context"
import "./styles/styles"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ViewPDFProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/view" element={<ViewPdf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ViewPDFProvider>
  </BrowserRouter>
)
