import React from 'react'

const DropMenu = (
    {handleTasteChange,tastes, handleColorChange, colors,
    handleCountryChange,countries, handleBodyChange, bodies, 
    }) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>

    <select onChange={handleTasteChange}>
    <option>Sweet or Dry </option>
       {tastes.map((taste) => <option key={taste.label}>{taste.label}</option>)}  
   </select>

   <select onChange={handleColorChange}>
        <option> Red or White</option>
          {colors.map((color)=> <option key={color.label}>{color.label}</option>)}
      </select>
 
      <select onChange={handleCountryChange}>
        <option>From Any Country</option>
          {countries.map((country)=> <option key={country.label}>{country.label}</option>)}
      </select>

      <select onChange={handleBodyChange}>
        <option> Any Wine Body</option>
          {bodies.map((body)=><option key={body.label}>{body.label}</option>)}

      </select>
   
   </form>
  )
}

export default DropMenu