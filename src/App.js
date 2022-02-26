import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import './App.scss';
import { MapContainer } from './components/MapContainer/MapContainer';
import { CountryInfoPopUp } from './components/CountryInfoPopUp/CountryInfoPopUp';
import { useContext, useState } from 'react';
import { PopUpContext } from './context/PopUpContext';
import { FloatingButtonHome } from './components/FloatingButtonHome/FloatingButtonHome';
import { MapsMenuContainer } from './components/MapsMenuContainer/MapsMenuContainer';

function App() {

  const {displayPopUp,displayMenu} = useContext(PopUpContext)

  return (
    <BrowserRouter>

        <h1>InfoMap</h1>

        <Routes>
            <Route exact path="/" element={<MapContainer/>}/>
            <Route exact path="*" element={<Navigate to="/"/>}/>
        </Routes>

        {displayPopUp && <CountryInfoPopUp/>}
        {displayMenu && <MapsMenuContainer/>}
        <FloatingButtonHome/>
    </BrowserRouter>
  );
}

export default App;
