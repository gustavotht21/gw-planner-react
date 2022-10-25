import "./style.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from '../../pages/login'
import About from '../../pages/about'
import Home from '../../pages/home'

export default function Navbar({icon, title, description, route}){
  return(
    <nav className="navbar-container">
      
      <div className="navbar-content">
        
        <div className="navbar-text">
          <h3 className="navbar-title">{title}</h3>
          <p className="navbar-description">{description}</p>
        </div>
        
        <Link to={route}>
          <button className="navbar-button">{icon}</button>
        </Link>
      </div>
      
    </nav>
  )
}