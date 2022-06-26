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
import { ethers } from "ethers";


import Metamask from './components/MetaMask';

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
  const [walletAddress, setWalletAddress] = useState("");
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  console.log("provider: ", provider);
  const signer = provider.getSigner()
  console.log("signer: ", signer);




  async function requestAccount(){
    console.log("hey")

    try{
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log("acc" ,accounts);
    }catch(error){
        console.log("err", error)
    }

}

  // const accounts = await provider.send("eth_requestAccounts", []);


  // const { active, chainId, account } = useWeb3React(); //info about Connected Wallet



  console.log("I can acc: ",contactInfo)
  const handleChange = (event) => { //for auth traveler form 
     setContactInfo([walletAddress, event.target.value]); //add user and authorized friend to 
  };

  const handleSubmit = (event) => { //for auth traveler form 
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };


  const paymentInfo = (num) => {
    //payment status = 0 -> nobody paid 
    if(num == 0){
      setPaymentStatus(0);
    }

    //payment status = 1 -> one paid 
    if(num == 1){
      setPaymentStatus(1);
    }
    //payment status = 2 -> both paid 
    if(num ==2){
      setPaymentStatus(2);
    }
    
    
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
    <div>
      
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

        {(() => {
            if (!walletAddress) {
                return (
                  <button className='this-button'
                  onClick={requestAccount}
              
              >Connect Wallet</button>
                )
            } 
            else{
              return(
                <p>{walletAddress}</p>
              )
            }
        })()}
       
        <div>
            <Routes>
                <Route path='/HomePage' element={<HomePage choseParis={choseParis} choseNYC={choseNYC} value={value} onChange={onChange} handleChange={handleChange} handleSubmit={handleSubmit} contactInfo={contactInfo}/>}/>
                <Route path='/connectWallet' element={<Metamask/>}/>
                <Route path='/confirmSelection' element={<ConfirmSelectionPage location={location} value={value} choseMarriot={choseMarriot} choseHyatt={choseHyatt} choseHilton={choseHilton} hotel={hotel} provider={provider} signer={signer} contactInfo={contactInfo}/>}/>
                <Route path='/travelSummary' element={<TravelSummaryPage location={location} value={value} hotel={hotel} contactInfo={contactInfo} paymentStatus={paymentStatus} provider={provider} signer={signer}/>}/>
            </Routes>
        </div>
        </>

        

    </BrowserRouter>

    </div>

    

  );
}

export default App;
