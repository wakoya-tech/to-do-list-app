import React,{useState} from 'react'

function ToDoList() {
    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("ciree nyaadhu","uffata jijiiradhu","mana barumsaa deemi");
    function handleInputChange(e){
      setNewTask(e.target.value)
    }
    function addTask(){
  
    }
    function deleteTask(index){
      
    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }
  return (
    <div className='to-do-list'>
<h1>To-Do-List</h1>
<div>
    <input type="text" placeholder='enter a task' 
    value={newTask} onChange={handleInputChange}/>
 <button className='add-button' onClick={addTask}> </button>
</div>
    </div>
  )
}

export default ToDoList