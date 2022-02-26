import React from 'react'

export const Continents = ({data}) => {


    
    return (
        <div className="continentsContainer">
            <p>Continents:</p>
            <div>
                { data.map( (continent) => <p className="continent">{continent}</p>)}
            </div>
        </div> 
    )
}
