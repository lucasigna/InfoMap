import React from 'react'

export const Timezones = ({data}) => {

    

    return (
        <div className="timezonesContainer">
            <p>Timezones:</p>
            <div>
                { data.map( (time) => <p className="time">{time}</p>)}
            </div>
        </div>  
    )
}
