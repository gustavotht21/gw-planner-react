import "./style.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from '../about'
import Navbar from "../../components/Navbar"

export default function Login(){
    return(
        <>
            <Navbar
                icon="husdjn"
                title="Identificação"
                description="Identifique-se para acessar informações pessoais"
                route="/sobre"
            />
            <div className="login-container">
              {/* Colocar o botão de matrícula e entrar como componentes aqui */}
              <input type='text' className="input-registration" placeholder="Matrícula"></input>
              <button className="login-button">
                <a className="button-link" href="https://planner-cacicada.watenhagugu.repl.co/inicio">
                  Entrar
                </a>
              </button>
            </div>

        </>
    )
}