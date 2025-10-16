import React,{useState} from 'react'

function ToDoList() {
    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("");
    function handleInputChange(e){
      setTasks(e.target.value)
    }
    function addTask(){
  
    }
    function deleteTask(){
      
    }
  return (
    <>


    </>
  )
}

export default ToDoList