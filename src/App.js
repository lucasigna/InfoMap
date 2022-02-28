import { BrowserRouter,Route,Routes,Navigate, NavLink } from 'react-router-dom'
import './App.scss';
import { MapContainer } from './components/MapContainer/MapContainer';
import { CountryInfoPopUp } from './components/CountryInfoPopUp/CountryInfoPopUp';
import { useContext, useState } from 'react';
import { PopUpContext } from './context/PopUpContext';
import { FloatingButtonHome } from './components/FloatingButtonHome/FloatingButtonHome';
import { MapsMenuContainer } from './components/MapsMenuContainer/MapsMenuContainer';
import { PopulationMapContainer } from './components/PopulationMapContainer/PopulationMapContainer';
import { GiniMapContainer } from './components/GiniMapContainer/GiniMapContainer';

function App() {

  const {displayPopUp,displayMenu} = useContext(PopUpContext)

  return (
    <BrowserRouter>

        <NavLink to='/' className='navLinkH1'><h1>InfoMap</h1></NavLink>

        <Routes>
            <Route exact path="/" element={<MapContainer/>}/>
            <Route exact path="/population" element={<PopulationMapContainer/>}/>
            <Route exact path="/gini" element={<GiniMapContainer/>}/>
            <Route exact path="*" element={<Navigate to="/"/>}/>
        </Routes>

        {displayPopUp && <CountryInfoPopUp/>}
        {displayMenu && <MapsMenuContainer/>}
        <FloatingButtonHome/>
    </BrowserRouter>
  );
}

export default App;
