import React from 'react'

import "./ContentCadastro.css"
import {Link} from "react-router-dom";

export default function ContentCadastro() {
    return (
        <>
            <form action="#">
                <div id={"inputEmail"}>
                    <label id={"cadastro-label-email"} htmlFor="email">Email</label>
                    <input type="email" id={"cadastro-email"} required/>
                </div>
                <div id={"inputPassword"}>
                    <label id={"cadastro-label-senha"} htmlFor="password">Senha</label>
                    <input type="password" id={"cadastro-password"} required/>
                </div>
                <div id={"inputPasswordAgain"}>
                    <label id={"cadastro-label-senhaAgain"} htmlFor="passwordAgain">Repita a Senha</label>
                    <input type="password" id={"cadastro-passwordAgain"} required/>
                </div>
                <div id={"buttons-cadastro"}>
                    <button id={"cadastro-button-conclude"} type={"submit"}>Finalizar cadastro</button>
                    <Link to={"/login"}>
                        <button id={"cadastro-button-back"}>Login</button>
                    </Link>
                </div>
            </form>
        </>
    )
}