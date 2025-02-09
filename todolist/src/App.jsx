import { useState } from 'react';
import Addinglist from './Addinglist';
import './App.css'


function App() {
  const [task, setTask]=useState([]);
   
  const addtodo=(event)=>{

    event.preventDefault();


    let mytask = event.target.taskid.value;
    if (!mytask) {
      alert("Task cannot be empty!");
      return;
    }
    if(!task.includes(mytask)){

      let newtodolist=[...task, mytask];
      setTask(newtodolist);

    }
    else{
      alert("This task is already in the list");
    }
    event.target.taskid.value ="";
    
  }

  let myalltask = task.map((value, index)=>{
    return(
    
            <Addinglist value={value} key={index} indexnumber={index} task={task} setTask={setTask}/>

      
    )
  })
  return (
   <>
<div className="flex items-center justify-center w-full text-3xl font-semibold text-black p-4 border-b">
  Todo List
</div>

   <div className="flex items-center justify-center w-full h-full pt-3">
   <div className="bg-white p-4 rounded-lg shadow-md w-96 ">
      <form onSubmit={addtodo} className="flex space-x-2">
        <input 
          type="text" 
          className="border border-gray-300 p-2 flex-grow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Enter your task here"
          name='taskid'
        />
        <button 
           
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Add
        </button>
      </form>
    </div>

   </div>

   <ul className="w-full max-w-md mx-auto mt-10 bg-white p-4 rounded-lg shadow-md">
  {myalltask}
</ul>


  
   </>
  )
}


export default App
