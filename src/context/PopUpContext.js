import React, { createContext, useState } from 'react'

export const PopUpContext = createContext()

export const PopUpProvider = ({children}) => {

    const [displayPopUp,setDisplayPopUp] = useState(false)
    const [displayMenu,setDisplayMenu] = useState(false)
    const [countryCode,setCountryCode] = useState("")
    const [loadingProgress,setLoadingProgress] = useState('0')

    const togglePopUp = (code) => {
        setDisplayPopUp(!displayPopUp)
        if(code){
            setCountryCode(code)
        }
    }

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }
    
    const updateLoadingProgress = (progress) => {
        setLoadingProgress(progress)
    }

    return (
        <PopUpContext.Provider value={{displayPopUp,togglePopUp,countryCode,displayMenu,toggleMenu,loadingProgress,updateLoadingProgress}}>
            {children}
        </PopUpContext.Provider>
    )

}