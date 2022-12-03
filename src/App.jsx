import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Login from './pages/login/login.jsx'
import About from './pages/about/about.jsx'
import Home from './pages/home/home.jsx'
import Cadastro from "./pages/cadastro/cadastro.jsx";
import Desenvolvedores from "./pages/desenvolvedores/desenvolvedores.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/">
          <Route index element={<About />} />
        </Route>

        <Route path="/login">
          <Route index element={<Login />} />
        </Route>

        <Route path="/inicio">
          <Route index element={<Home />} />
        </Route>

        <Route path="/cadastro">
          <Route index element={<Cadastro />} />
        </Route>

        <Route path="/desenvolvedores">
          <Route index element={<Desenvolvedores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}