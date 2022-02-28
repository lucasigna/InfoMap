import { CircularProgress } from '@mui/material'
import React, { useContext } from 'react'
import { PopUpContext } from '../../context/PopUpContext'
import './LoadingScreen.scss'

export const LoadingScreen = () => {



    return (
        <div className="loadingScreen">
            <CircularProgress disableShrink />
        </div>
    )
}
