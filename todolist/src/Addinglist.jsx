function Addinglist({value, indexnumber, task, setTask}){
    const deletetask=()=>{
  let finallist=task.filter((v,i)=>i!==indexnumber)
  setTask(finallist);
    }
    return(
    <li className="p-2 border-b last:border-b-0 relative">
     {indexnumber +1}. {value}
      <span onClick={deletetask} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700 text-lg font-bold cursor-pointer">
        &times;
      </span>
    </li>
  
  
      
    )
  }
  export default Addinglist;