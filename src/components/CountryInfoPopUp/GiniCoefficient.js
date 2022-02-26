import React from 'react'

export const GiniCoefficient = ({data}) => {

    const cleanData = Object.entries(data).map( e => {
        return {
            year: e[0],
            gini: e[1]
        }
    })

    return (
        <div className="giniContainer">
            <p>Gini coefficient:</p>
            { cleanData.map( (data) => {
                return (
                    <div className="ginis">
                        <p>{data.year}</p>
                        <hr/>
                        <p>{data.gini}</p>
                    </div>
                )
            })}
        </div>
    )
}
