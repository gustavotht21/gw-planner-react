import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/login'
import About from './pages/about'
import Home from './pages/home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar">
          <Route index element={<Login />} />
        </Route>

        <Route path="/sobre">
          <Route index element={<About />} />
        </Route>

        <Route path="/inicio">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}