import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/login'
import About from './pages/about'
import HomeStudent from './pages/homeStudent'
import HomeLeader from './pages/homeLeader'
import EditLeader from './pages/editLeader'

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

        <Route path="/inicioestudante">
          <Route index element={<HomeStudent />} />
        </Route>

        <Route path="/iniciolider">
          <Route index element={<HomeLeader />} />
        </Route>

        <Route path="/iniciolider">
          <Route index element={<HomeLeader />} />
        </Route>

        <Route path="/editcaolider">
          <Route index element={<EditLeader />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
