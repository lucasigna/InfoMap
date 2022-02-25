const URL_BASE = 'https://restcountries.com/v3.1'

export const getDataCountry = (code,setData) => {

    fetch(`${URL_BASE}/alpha/${code}`)
    .then( resp => resp.json() )
    .then( data => setData(data[0]))

}