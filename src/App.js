import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import './App.scss';
import { MapContainer } from './components/MapContainer/MapContainer';
import { CountryInfoPopUp } from './components/CountryInfoPopUp/CountryInfoPopUp';
import { useContext } from 'react';
import { PopUpContext } from './context/PopUpContext';

function App() {

  const {displayPopUp} = useContext(PopUpContext)

  return (
    <BrowserRouter>

        <h1>InfoMap</h1>

        <Routes>
            <Route exact path="/" element={<MapContainer/>}/>
            <Route exact path="*" element={<Navigate to="/"/>}/>
        </Routes>

        {displayPopUp && <CountryInfoPopUp/>}
    </BrowserRouter>
  );
}

export default App;
