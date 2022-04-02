import React from 'react'

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