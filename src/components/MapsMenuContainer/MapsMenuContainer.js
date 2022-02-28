import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PopUpContext } from '../../context/PopUpContext'
import { MapMenuContainer } from './MapMenuContainer'
import './MapsMenuContainer.scss'

export const MapsMenuContainer = () => {

    const {toggleMenu} = useContext(PopUpContext)

    return (
        <div className="mapsMenuContainer" onClick={toggleMenu}>
            <div className="mapsMenuContent">
                <NavLink className="navLink" to="/population"><MapMenuContainer title="Population"/></NavLink>
                <NavLink className="navLink" to="/gini"><MapMenuContainer title="Gini coefficient"/></NavLink>
            </div>
        </div>
    )
}
