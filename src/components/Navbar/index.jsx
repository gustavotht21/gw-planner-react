import "./style.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from '../../pages/login'
import About from '../../pages/about'
import Home from '../../pages/home'

export default function Navbar({icon, title, description, route}){
  return(
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-butitle">
          <Link to={route}>
            <button className="navbar-button">{icon}</button>
          </Link>
          <h3 className="navbar-title">{title}</h3>
        </div>
        <p className="navbar-description">{description}</p>
      </div>
    </nav>
  )
}