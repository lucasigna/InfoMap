import React, { useContext, useEffect, useState } from 'react'
import './PopulationMapContainer.scss'
import { WorldMap } from 'react-svg-worldmap';
import { getPopulations } from '../../services/services';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export const PopulationMapContainer = () => {

    const [data,setData] = useState([])
    const [load,setLoad] = useState(true)

    const [width,setWidth] = useState(window.innerWidth-20)

    const handleResize = () => {
        setWidth(window.innerWidth-20)
    }

    window.addEventListener("resize", handleResize)

    useEffect(() => {
        getPopulations(setData,setLoad)
    },[])

    return (
        <div>
            <WorldMap
                color="red"
                value-suffix="people"
                title="Population"
                size={width}
                data={data}
            />
            {load && <LoadingScreen/>}
        </div>
    )
}
