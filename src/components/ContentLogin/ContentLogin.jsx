import React from 'react'

import "./ContentLogin.css"

export default function ContentLogin() {
    return (
        <>
            <form action="#">
                <div id={"inputEmail"}>
                    <label id={"login-label-email"} htmlFor="email">Email</label>
                    <input type="email" id={"login-email"} required/>
                </div>
                <div id={"inputPassword"}>
                    <label id={"login-label-password"} htmlFor="password">Senha</label>
                    <input type="password" id={"login-password"} required/>
                </div>
                <div id={"buttons-login"}>
                    <button id={"login-button-conclude"} type={"submit"}>Entrar</button>
                    <a id={"login-button-back"} href="/cadastro">Cadastre-se</a>
                </div>
            </form>
        </>
    )
}