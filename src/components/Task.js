import React from "react";

function Task({category, text, handleRemove}) {

  function onRemove(e){
    handleRemove(e.target)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button id={text} onClick={onRemove} className="delete">X</button>
    </div>
  );
}

export default Task;
