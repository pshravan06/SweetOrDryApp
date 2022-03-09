import React from 'react'

const Results = ({ wines }) => {
  return (
    <li>
        {JSON.stringify(wines)}
    </li>
  )
}

export default Results