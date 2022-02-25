import React, { useContext, useEffect, useState } from 'react'
import './CountryInfoPopUp.scss'
import { getDataCountry } from './../../services/services';
import { PopUpContext } from '../../context/PopUpContext';
import CircularProgress from '@mui/material/CircularProgress';

export const CountryInfoPopUp = () => {

    const {countryCode,togglePopUp} = useContext(PopUpContext)
    const [countryData,setCountryData] = useState(null)

    useEffect(() => {
        getDataCountry(countryCode,setCountryData)
    },[])

    return (
        <div className="countryInfoPopUpContainer" onClick={togglePopUp}>
            {countryData ? 
            <div className="countryInfoPopUp">
                <img className="countryFlag" src={require(`../../assets/${countryCode}.png`)} alt="bandera"/>
                <p>{countryData.name.common}</p>
                <p>Population: {countryData.population} habitantes</p>
                <p>Area: {countryData.area} Km<sup>2</sup></p>
                <p>Capital: {countryData.capital}</p>
            </div>
            :
            <CircularProgress disableShrink />
            }
        </div>
    )
}
