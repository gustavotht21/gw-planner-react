import React from 'react'

import "./cadastro.css"
import Modal from "../../components/Modal/Modal.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const Title = "Bem-vindo ao GW Planner"
const SubTitle = "Para entrar, informe as suas credenciais"

export default function Cadastro(){
    return(
        <>
            <body className={"body-cadastro"}>
                <NavBar />
                <Modal Title={Title} SubTitle={SubTitle} page={"cadastro"} />
            </body>
        </>
    )
}