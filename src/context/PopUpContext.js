import React, { createContext, useState } from 'react'

export const PopUpContext = createContext()

export const PopUpProvider = ({children}) => {

    const [displayPopUp,setDisplayPopUp] = useState(false)
    const [displayMenu,setDisplayMenu] = useState(false)
    const [countryCode,setCountryCode] = useState("")

    const togglePopUp = (code) => {
        setDisplayPopUp(!displayPopUp)
        if(code){
            setCountryCode(code)
        }
    }

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }
    

    return (
        <PopUpContext.Provider value={{displayPopUp,togglePopUp,countryCode,displayMenu,toggleMenu}}>
            {children}
        </PopUpContext.Provider>
    )

}