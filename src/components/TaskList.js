import React from "react";
import Task from "./Task";

function TaskList({ taskState, setTaskState, itemsToDisplay, setItemsToDisplay }) {

  function handleRemove(completedTask){
    const newList = taskState.filter((task) => task.text !== completedTask.id)
    setTaskState(newList)
    setItemsToDisplay(newList)
  }

  console.log("itemsToDisplay", itemsToDisplay)

  return (
    <div className="tasks">
      <ul id="taskList">
        {itemsToDisplay.map((item) => (
          <Task handleRemove={handleRemove} key={item.text} text={item.text} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
