import React from 'react'

import "./cadastro.css"
import "../../assets/css/globalStyles.css"

import Modal from "../../components/Modal/Modal.jsx";

const Title = "Bem-vindo ao GW Planner"
const SubTitle = "Para entrar, informe as suas credenciais"

export default function Cadastro(){
    return(
        <body>
            <Modal Title={Title} SubTitle={SubTitle} page={"cadastro"} />
        </body>
    )
}