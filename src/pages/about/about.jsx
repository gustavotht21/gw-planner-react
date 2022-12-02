import "./about.css"

import Navbar from "../../components/Navbar"
import BackspaceIcon from '../../assets/icons/Backspace.svg'

export default function About(){
  return(
    <div className="about-container">
      <Navbar 
        icon={<img src={BackspaceIcon}/>} 
        title="Sobre" 
        description="Informações sobre o projeto e aplicação"
        route="/"
      />
      <section className="about-section">
        <p className="about-text">
          O aplicativo tem como objetivo auxiliar os alunos do Instituto Federal de Educação, Ciência e Tecnologia de Rondônia (IFRO), por meio de um gerenciador de tarefas escolares prático, desenvolvido por alunos do instituto.
        </p>
      </section>
    </div>
  )
}