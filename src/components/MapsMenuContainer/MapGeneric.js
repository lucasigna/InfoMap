import React from 'react'
import WorldMap from 'react-svg-worldmap';
import { countries } from '../../helpers/helpers';

const data = []

const stylingFunction = ({countryValue,minValue,maxValue,country,color,}) => {
    return {
      fill: "white",
      strokeWidth: 1,
      stroke: "white",
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

export const MapGeneric = () => {



  return (
    <div>
        <WorldMap
            value-suffix="people"
            size={250}
            data={data}
            styleFunction={stylingFunction}
        />
    </div>
  )
}
