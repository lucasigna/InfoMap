import React from 'react'

export const Languages = ({data}) => {

    const cleanData = Object.entries(data).map( e => e[1] )

    return (
        <div className="languagesContainer">
            <p>Languages:</p>
            <div>
                { cleanData.map( (lang) => <p className="lang">{lang}</p>)}
            </div>
        </div>
    )
}
