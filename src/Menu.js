import React from 'react'
import DropMenu from './DropMenu'

const Menu = ( 
  {tastes,handleTasteChange,
  colors,handleColorChange, 
  countries,handleCountryChange,
  bodies,handleBodyChange,
  reqType, setReqType
  }) => {


    const populateDropdown=()=>{
      {tastes.map((taste) => <option key={taste.label}>{taste.label}</option>)}  
    }
  return (
   

   <>
      {/* <select onChange={handleTasteChange}>
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

      </select> */}

      <DropMenu 
     handleTasteChange={handleTasteChange}
     tastes={tastes}
     handleColorChange={handleColorChange}
     colors={colors}
     handleCountryChange={handleCountryChange}
     countries={countries}
     handleBodyChange={handleBodyChange}
     bodies={bodies}
     reqType={reqType}
     setReqType={setReqType}
      />

      

 </>
  )
}

export default Menu