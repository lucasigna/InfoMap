import React, { useContext } from 'react'
import { PopUpContext } from '../../context/PopUpContext'
import './FloatingButtonHome.scss'

export const FloatingButtonHome = () => {

    const {toggleMenu} = useContext(PopUpContext)

  return (
      <button onClick={toggleMenu}>
        See maps
      </button>
  )
}
