import React from 'react'
import { useState } from 'react'


const Menu = () => {

  // wine taste section
  let tastes = [
      {label: "Sweet"},
      {label:"Semi-Sweet / Off-Dry"},
      {label: "Dry"}
  ]

  let [taste, setTaste] = useState('Sweet or Dry')

  const handleTasteChange = (e) => {
    setTaste(e.target.value)
  };

  //wine color section
  let colors = [
      {label:"Red"},
      {label:"white"}
  ]

  let [color, setColor] = useState('Red or White');

  const handleColorChange = (e) =>{
    setColor(e.target.value)
  };

//wine country section

let countries = [
  {label:"Argentina"},
  {label:"California"},
  {label:"Chile"},
  {label:"France"},
  {label:"Italy"},
  {label:"New York"},
  {label:"Oregon"},
  {label:"Portugal"},
  {label:"Spain"},
]

let [country, setCountry] = useState("From Any Country");

const handleCountryChange = (e) =>{
  setCountry(e.target.value)
};

// wine body section

let bodies = [
  {label:"Light"},
  {label:"Medium"},
  {label:"Full"},
]

let [body, setBody] = useState("Any Wine Body");

const handleBodyChange = (e) =>{
  setBody(e.target.value)
}

console.log(taste);
console.log(color);
console.log(country);
console.log(body);

  return (
   

   <>
   <form>
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
 </>
  )
}

export default Menu