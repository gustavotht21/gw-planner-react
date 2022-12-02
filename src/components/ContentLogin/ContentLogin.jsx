import React from 'react'

import "./ContentLogin.css"

export default function ContentLogin() {
    return (
        <>
            <form action="#">
                <div id={"inputEmail"}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id={"email"} required/>
                </div>
                <div id={"inputPassword"}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id={"password"} required/>
                </div>
                <div id={"buttons"}>
                    <button type={"submit"}>Entrar</button>
                    <a href="../pages/home">Cadastre-se</a>
                </div>
            </form>
        </>
    )
}