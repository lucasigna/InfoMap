import React from 'react'
import { MapGeneric } from './MapGeneric'

export const MapMenuContainer = ({title}) => {



    return (
        <div className="mapMenuContainer">
            <MapGeneric/>
            <p>{title}</p>
        </div>
    )
}
