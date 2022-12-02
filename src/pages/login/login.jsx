import React from 'react'

import "./login.css"

import Modal from "../../components/Modal/Modal.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const Title = "Bem-vindo ao GW Planner"
const SubTitle = "Para entrar, informe as suas credenciais"

export default function Login(){
    return(
        <>
            <body className={"body-login"}>
            <NavBar />
                <Modal Title={Title} SubTitle={SubTitle} page={"login"} />
            </body>
        </>
    )
}