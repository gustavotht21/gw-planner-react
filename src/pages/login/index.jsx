import React from 'react'


import "./style.css"

export default function Login(){
  return(
    <>
      <header className="header-container">
        <div className="header-text">
          <h3 className="header-title">
            Identificação
          </h3>
          <p className="header-paragraph">
            Identifique-se para acessar informações pessoais
          </p>
        </div>
      </header>
      <div className="login-container">
        {/* Colocar o botão de matrícula e entrar como componentes aqui */}
        <input type='text' className="input-registration" placeholder="Matrícula"></input>
        <button className="login-button">Entrar</button>
      </div>
    </>
  )
}