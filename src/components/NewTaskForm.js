import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const modifiedCategories = categories.filter((item)=> item !== "All")

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function handleSubmit(e){
    e.preventDefault()
    setFormData({
      ...formData,
      [e.name]: e.value
    })
    onTaskFormSubmit(formData)
    setFormData({
      text: "",
      category: "Code"
    })
  }

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={formData.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} value={formData.category} name="category">
          {modifiedCategories.map((item)=><option key={item} >{item}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
