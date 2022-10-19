
import Navbar from "../../components/Navbar";
import Tasks from "../../components/Tasks";
import {useState} from "react";
import AddTask from "../../components/AddTask/index.jsx";

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
    <>
        <Navbar 
        icon="←" 
        title="Planejamento Semanal" 
        description="Visualize as suas tarefas da semana"
        route="/"/>
        <div className="container">
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} />
        </div>
    </>
  )
}