import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {... task, completed: !task.completed};

        return task;
    });

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
  }

  return <Router>
    <div className="container">
      <Header/>
      <Route path="/" exact render={() => (
        <>
        
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
        </>
      )}/>

      <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
  </Router>
};

export default App;