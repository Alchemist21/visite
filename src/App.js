import logo from './logo.svg';
import './App.css';
import  HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ConnectWallet from './components/ConnectWallet';
import { PageOne } from './pages/PageOne';
import PageTwo from './pages/PageTwo';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ConfirmSelectionPage from './pages/ConfirmSelectionPage';
import TravelSummaryPage from './pages/TravelSummaryPage';


function App() {

  const [location, setLocation] = useState('')
  const [value, onChange] = useState([new Date(), new Date()]);
  // const [authorizedTraveler, handleSubmit] = useState('')
  const [contactInfo, setContactInfo] = useState('');

  const handleChange = (event) => {
    setContactInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };


  const [hotel, setHotel] = useState('')
  console.log("location", location)
  console.log("vv: ", value)

 
  const choseParis = () => {
    setLocation('Paris')
    console.log("CLICKED par");
  }
  const choseNYC = () => {
    setLocation('New York')
    console.log("CLICKED NY");
  }

  const choseMarriot = () => {
    setHotel('Marriot')
  }

  const choseHyatt = () => {
    setHotel('Hyatt')
  }
  
  const choseHilton = () => {
    setHotel('Hilton')
  }

  return (
    <BrowserRouter>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >Visite</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/HomePage">Home</Nav.Link>
              <Nav.Link as={Link} to="/connectWallet">Connect Wallet</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
            <Routes>
                <Route path='/HomePage' element={<HomePage choseParis={choseParis} choseNYC={choseNYC} value={value} onChange={onChange} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
                <Route path='/connectWallet' element={<ConnectWallet/>}/>
                <Route path='/confirmSelection' element={<ConfirmSelectionPage location={location} value={value} choseMarriot={choseMarriot} choseHyatt={choseHyatt} choseHilton={choseHilton} hotel={hotel}/>}/>
                <Route path='/travelSummary' element={<TravelSummaryPage location={location} value={value} hotel={hotel} contactInfo={contactInfo}/>}/>
            </Routes>
        </div>
        </>

    </BrowserRouter>

  );
}

export default App;
