import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  // var message = 'Hello World!';
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: 2,
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [... tasks, {
      title: taskTitle, 
      id: uuidv4(),
      completed: false,
    },
  ];

  setTasks(newTask);

  }

  return <div>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/></div>
  </div>
};

export default App;