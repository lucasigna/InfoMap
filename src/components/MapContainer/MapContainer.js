import React, { useContext, useEffect, useState } from 'react'
import WorldMap from "react-svg-worldmap";
import { colors, countries } from './../../helpers/helpers';
import { CountryContext } from "react-svg-worldmap";
import './MapContainer.scss'
import { PopUpContext } from '../../context/PopUpContext';

const data = countries.map(country => {
    return {
        country: country.alpha2,
        value: ""
    }
})

const stylingFunction = ({countryValue,minValue,maxValue,country,color,}) => {
    return {
      fill: "#011936",
      strokeWidth: 0.5,
      stroke: "white",
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

export const MapContainer = () => {

    const {togglePopUp} = useContext(PopUpContext)
    const [width,setWidth] = useState(window.innerWidth-20)

    const onClick = (e) => {
        const code = e.countryCode.toLowerCase()
        togglePopUp(code)
    }

    const handleResize = () => {
        setWidth(window.innerWidth-20)
    }

    window.addEventListener("resize", handleResize)

    return (
        <div className="mapContainer">
            
                <WorldMap
                    value-suffix="people"
                    size={width}
                    data={data}
                    styleFunction={stylingFunction}
                    onClickFunction={onClick}
                />
            
        </div>
    )
}
