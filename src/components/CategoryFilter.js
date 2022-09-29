import React, {useState} from "react";

function CategoryFilter({categories, handleFilter}) {
  const categoryObject = {}

  categories.forEach((item)=>{
    {categoryObject[item] = false}
  })

  const [isSelected, setIsSelected] = useState(categoryObject)

  function handleClick(e){
    setIsSelected(()=>{
      return {...categoryObject,
      [e.target.name]: "selected"}
      })
    handleFilter(e.target.name)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>{
        return <button onClick={handleClick} name = {category} key={category} className={isSelected[category] ? "selected" : ""} >{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
