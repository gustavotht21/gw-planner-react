import React from 'react'
import NavBar from "../../components/NavBar/NavBar";

import "./about.css"
import {Link} from "react-router-dom";

export default function about() {
    return (
        <body className={"body-sobre"}>
            <NavBar />

            <div className={"introduction-container"}>

                <div className={"image"}>
                    <img src="src/assets/imgs/Calendar.svg" alt="Calendário"/>
                </div>
                <p>O seu planner de tarefas. Crie um, edite, gerencie e desfrute de uma vida mais organizada!</p>
                <Link to={"/cadastro"}>
                    <button>Cadastre-se agora!</button>
                </Link>
            </div>

            <div className="content-container">
                <div className={"text"}>
                    <p>
                        Com a GW Planner, você estará sempre seguro com suas atividades. Com uma interface simples e inteligente, o GW Planner é o sistema perfeito para quem quer começar a se organizar, ou mesmo para quem quer dar o próximo passo!
                        <br/>
                        <br/>
                        Seja para agendar uma reunião ou para apenas marcar um lembrete, o GW Planner é certamente a ferramenta certa para você!
                    </p>

                    <Link to={"/cadastro"}>
                        <button>Cadastre-se agora!</button>
                    </Link>
                </div>

                <div className={"image-list"}>
                    <img src="src/assets/imgs/list.svg" alt=""/>
                </div>
            </div>

            <div className={"footer-container"}>
                <div className={"text"}>
                    <p>
                        Possui alguma dúvida? Algum problema? Entre em contato com a nossa equipe!
                        <br/>
                        <br/>
                        Responderemos o mais rápido possível!
                    </p>
                </div>
                <div className={"forms"}>
                    <div className={"input"}>
                        <label htmlFor="email">Insira o seu email</label>
                        <input type="email" id={"email"} required/>
                    </div>
                    <div className={"input"}>
                        <label htmlFor="message">Escreva sua mensagem</label>
                        <textarea id="message" required></textarea>
                    </div>

                    <div>
                        <button type={"submit"}>Enviar</button>
                    </div>
                </div>

            </div>
        </body>
    )
}