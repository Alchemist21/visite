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

import { useWeb3React } from '@web3-react/core'


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

  const [location, setLocation] = useState('') //location selection
  const [value, onChange] = useState([new Date(), new Date()]); //date picker 
  const [contactInfo, setContactInfo] = useState([]); //authorized traveler
  const [hotel, setHotel] = useState('') //hotel selection
  const [paymentStatus, setPaymentStatus] = useState(0);

  const { active, chainId, account } = useWeb3React(); //info about Connected Wallet

  console.log("I can acc: ",contactInfo)
  const handleChange = (event) => { //for auth traveler form 
    setContactInfo([account, event.target.value]); //add user and authorized friend to 
  };

  const handleSubmit = (event) => { //for auth traveler form 
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };


  const paymentInfo = () => {
    
  }
 
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
                <Route path='/travelSummary' element={<TravelSummaryPage location={location} value={value} hotel={hotel} contactInfo={contactInfo} paymentStatus={paymentStatus}/>}/>
            </Routes>
        </div>
        </>

    </BrowserRouter>

  );
}

export default App;
