import React from 'react'

export const Currencies = ({data}) => {

    const cleanData = Object.entries(data).map( e => {
        return {
            name: e[1].name,
            symbol: e[1].symbol,
            acronym: e[0]
        }
    })

    return (
        <div className="currenciesContainer">
            <p>Currencies:</p>
            { cleanData.map( (data) => {
                return (
                    <div className="currencyContainer">
                        <p>{data.acronym}</p>
                        <hr/>
                        <p>{data.name}</p>
                        <hr/>
                        <p>{data.symbol}</p>
                    </div>
                )
            })}
        </div>
    )
}
