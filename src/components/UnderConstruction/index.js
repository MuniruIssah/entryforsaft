import React from 'react'
import './styles.css'
const UnderConstruction = ({type='section'}) => {
    return (
        <div className="UCWrapper">
        <div className='underConstruction'>
        </div>
        <span>This {type} <br/> is  under construction</span>

        </div>
    )
}

export default UnderConstruction
