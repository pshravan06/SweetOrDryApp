import React from 'react'
//CREATED THIS COMPONENT TO TEST WHY I CANT ADD ADDITIONAL FUNCTIONS AND SORTS
const TasteButtons = ({buttonText, taste, handleTasteClick}) => {
  return (

<button
        data-taste={taste}
        
        onClick={handleTasteClick}
      

        
        
    >
        {buttonText}
    </button>

  )
}

export default TasteButtons