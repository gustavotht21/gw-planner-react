import React from 'react'
import NavBar from "../../components/NavBar/NavBar";

import "./desenvolvedores.css"

export default function desenvolvedores() {
    return (
        <div className={"body-desenvolvedores"}>
            <NavBar />
            <div className={"container"}>
                <div className={"gustavo"}>
                    <img src="https://github.com/gustavotht21.png" alt="Foto de Gustavo"/>
                    <a href={"https://github.com/gustavotht21"} target={"_blank"}>Gustavo Casagrande Borges</a>
                </div>
                <div className={"wata"}>
                    <img src="https://github.com/WataNegreirosMonteiro.png" alt="Foto de Wata"/>
                    <a href={"https://github.com/WataNegreirosMonteiro"} target={"_blank"}>Wata Negreiros Monteiro</a>
                </div>
            </div>
        </div>
    )
}