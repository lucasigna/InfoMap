import React, { useContext } from 'react'
import { PopUpContext } from '../../context/PopUpContext'
import { MapMenuContainer } from './MapMenuContainer'
import './MapsMenuContainer.scss'

export const MapsMenuContainer = () => {

    const {toggleMenu} = useContext(PopUpContext)

    return (
        <div className="mapsMenuContainer" onClick={toggleMenu}>
            <div className="mapsMenuContent">
                <MapMenuContainer title="Population"/>
                <MapMenuContainer title="PBI"/>
                <MapMenuContainer title="Gini coefficient"/>
                <MapMenuContainer title="Gini coefficient"/>
            </div>
        </div>
    )
}
