import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [taskState, setTaskState]= useState(TASKS)
  const [itemsToDisplay, setItemsToDisplay] = useState(TASKS)

  function handleFilter(category){
    setItemsToDisplay(taskState.filter((item)=> {
      if (category === 'All'){
      return true
    }else {return item.category === category}
    }))
  }
  
  function onTaskFormSubmit(newTask){
    setTaskState([...taskState, newTask])
    setItemsToDisplay([...taskState, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} categories={CATEGORIES} />
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList itemsToDisplay={itemsToDisplay} setItemsToDisplay={setItemsToDisplay} taskState={taskState} setTaskState={setTaskState} />
    </div>
  );
}

export default App;
