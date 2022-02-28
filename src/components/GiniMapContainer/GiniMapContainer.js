import React, { useContext, useEffect, useState } from 'react'
import './GiniMapContainer.scss'
import { WorldMap } from 'react-svg-worldmap';
import { getPopulations } from '../../services/services';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { getGiniCoefficients } from './../../services/services';

export const GiniMapContainer = () => {

    const [data,setData] = useState([])
    const [load,setLoad] = useState(true)

    const [width,setWidth] = useState(window.innerWidth-20)

    const handleResize = () => {
        setWidth(window.innerWidth-20)
    }

    window.addEventListener("resize", handleResize)

    useEffect(() => {
        getGiniCoefficients(setData,setLoad)
    },[])

    return (
        <div>
            <WorldMap
                color="orange"
                value-suffix="gini"
                title="Gini coefficient"
                size={width}
                data={data}
            />
            {load && <LoadingScreen/>}
        </div>
    )
}
