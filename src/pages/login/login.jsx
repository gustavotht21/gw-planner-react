import React from 'react'

import "./login.css"
import "../../assets/css/globalStyles.css"

import Modal from "../../components/Modal/Modal.jsx";

const Title = "Bem-vindo ao GW Planner"
const SubTitle = "Para entrar, informe as suas credenciais"

export default function Login(){
    return(
        <body>
                <Modal Title={Title} SubTitle={SubTitle} page={"login"} />
        </body>
    )
}