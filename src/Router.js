import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Company/Main/Home"
import { Notfound } from "./Company/Main/Notfound"
import { Header } from "./Company/Main/Header"
import { ABOUT } from "./Company/Main/ABOUT"
import { NOTICE } from "./Company/Main/NOTICE"
import { TALENT } from "./Company/Main/TALENT"
import { CONTENT } from "./Company/Main/COTENT"
import { GUIDELINE } from "./Company/Main/GUIDELINE"
import { routes } from "./routes"
import { Footer } from "./Company/Main/Footer"


export const Router = () => {
  return <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.ab} element={<ABOUT />} />
      <Route path={routes.no} element={<NOTICE />} />
      <Route path={routes.ta} element={<TALENT />} />
      <Route path={routes.co} element={<CONTENT />} />
      <Route path={routes.gu} element={<GUIDELINE />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
    <Footer />
  </HashRouter>
}