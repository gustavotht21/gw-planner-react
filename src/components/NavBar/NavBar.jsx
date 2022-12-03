import React from 'react'

import {Link} from "react-router-dom";

import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar-container">
            <div>
                <Link to={"/"} >
                    <img src="/src/assets/imgs/logo.svg" alt="Logo" />
                </Link></div>
            <div className={"items"}>
                <Link to={"/"} >
                    <p>Home</p>
                </Link>
                <Link to={"/login"} >
                    <p>Entrar</p>
                </Link>
                <Link to={"/cadastro"} >
                    <p>Cadastre-se</p>
                </Link>
                <Link to={"/"} >
                    <p>Desenvolvedores</p>
                </Link>
            </div>
        </nav>
    )
}