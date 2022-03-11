import React from 'react'
import { ItemDescription } from 'semantic-ui-react'
import wines from './api/wines'
import Row from './Row'

const Table = ({ wines }) => {
  return (
    <div>
        <table>
            <tbody>
                {wines.map(wine =>(
                    <Row key={wine.id} wine={wine}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table