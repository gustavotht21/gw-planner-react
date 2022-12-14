
import Navbar from "../../components/Navbar/NavBar.jsx";
import Tasks from "../../components/Tasks";
import {useState} from "react";
import AddTask from "../../components/AddTask/AddTask.jsx";
import SignoutIcon from '../../assets/icons/SignOut.svg';

import "./home.css"
export default function Home(){
    const [tasks, setTasks] = useState([
        {
            title: 'Estudar Programação',
        },
        {
            title: 'Ler livros',
        },
        {
            title: 'Ajudar o Ian nas tarefas',
        },
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
            },
        ];
        setTasks(newTasks);
    };

  return(
    <div>
        <Navbar 
        icon={<img src={SignoutIcon} alt={"Ícone"}/>}
        title="Planejamento Semanal" 
        description="Visualize as suas tarefas da semana"
        route="/"/>
        <div className="container">
            <AddTask handleTaskAddition={handleTaskAddition} />
            <div className="tasks-background">
              <Tasks tasks={tasks} />
            </div>
        </div>
    </div>
  )
}