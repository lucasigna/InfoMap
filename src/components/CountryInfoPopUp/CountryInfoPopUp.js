import React, { useContext, useEffect, useState } from 'react'
import './CountryInfoPopUp.scss'
import { getDataCountry } from './../../services/services';
import { PopUpContext } from '../../context/PopUpContext';
import CircularProgress from '@mui/material/CircularProgress';
import { Currencies } from './Currencies';
import { Languages } from './Languages';
import { Timezones } from './Timezones';
import { giveFormatToNumbers } from '../../helpers/helpers';
import { Continents } from './Continents';
import { GiniCoefficient } from './GiniCoefficient';

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
                <div>
                    <img className="countryFlag" src={require(`../../assets/${countryCode}.png`)} alt="bandera"/>
                    <p className="countryName">{countryData.name.common}</p>
                </div>
                <div>
                <p>Population: {giveFormatToNumbers(countryData.population)} inhabitants</p>
                <p>Area: {giveFormatToNumbers(countryData.area)} Km<sup>2</sup></p>
                <p>Capital/s: {countryData.capital.join(', ')}</p>
                <p>Region: {countryData.region}</p>
                <p>Subregion: {countryData.subregion}</p>
                </div>
                <Languages data={countryData.languages}/>
                <Currencies data={countryData.currencies}/>
                <Timezones data={countryData.timezones}/>
                <Continents data={countryData.continents}/>
                <GiniCoefficient data={countryData.gini}/>
            </div>
            :
            <CircularProgress disableShrink />
            }
        </div>
    )
}
