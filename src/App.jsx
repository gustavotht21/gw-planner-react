import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Login from './pages/login/login.jsx'
import About from './pages/about/about.jsx'
import Home from './pages/home/home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
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