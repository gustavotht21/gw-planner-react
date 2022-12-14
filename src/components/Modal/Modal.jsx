import React from 'react'

import "./Modal.css"
import "../../assets/css/globalStyles.css"
import DivImage from "../DivImage/DivImage.jsx";
import ContentLogin from "../ContentLogin/ContentLogin.jsx";
import ContentCadastro from "../ContentCadastro/ContentCadastro.jsx";

const DivImageText = "Descubra a melhor forma de se organizar."

export default function Modal(props) {

    function selectPage(page) {
        if (page === "login") {
            return <ContentLogin />
        } else if (page === "cadastro") {
            return <ContentCadastro />
        }
    }

    return (
       <div className={"body"}>
           <div className={"DivText"}>
               <div className={"content"}>
                   <h2>{props.Title}</h2>
                   <p>{props.SubTitle}</p>
               </div>

                {selectPage(props.page)}
           </div>
           <DivImage DivImageText={DivImageText}/>
       </div>
    )
}