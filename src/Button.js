import React from 'react'

const Button = ({buttonText, color, handleClick, taste, handleColorClick,handleTasteClick}) => {
  return (
    <button

        data-color={color}
        onClick={handleClick}
      

        
        // onClick={handleTasteClick}
        
    >
        {buttonText}
    </button>
    )
}

export default Button