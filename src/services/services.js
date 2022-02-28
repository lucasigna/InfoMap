import { countries } from "../helpers/helpers"

const URL_BASE = 'https://restcountries.com/v3.1'

export const getDataCountry = (code,setData) => {

    fetch(`${URL_BASE}/alpha/${code}`)
    .then( resp => resp.json() )
    .then( data => setData(data[0]))

}

export const getPopulations = async(setData,setLoad) => {

    const countries = await fetch(`${URL_BASE}/all`)
        .then( resp => resp.json() )
        .then( data => data)

    setData(countries.map( country => {
        return {
            country: country.cca2.toLowerCase(),
            value: country.population
        }
    }))

    setLoad(false)

}

export const getGiniCoefficients = async(setData,setLoad) => {

    const countries = await fetch(`${URL_BASE}/all`)
        .then( resp => resp.json() )
        .then( data => data)

    setData(countries.map( country => {

        if(country.gini !== undefined){

            const ginis = Object.entries(country.gini).map( e => {
    
                return {
                    year: e[0],
                    gini: e[1]
                }
            })
    
            let maxYear = 0
            let gini = 0
    
            for (const g of ginis) {
                
                if(g.year > maxYear) {
                    maxYear = g.year
                    gini = g.gini
                }
    
            }
    
            return {
                country: country.cca2.toLowerCase(),
                value: gini
            }

        } else {
            return {
                country: country.cca2.toLowerCase(),
                value: 0
            }
        }

    }))

    setLoad(false)

}