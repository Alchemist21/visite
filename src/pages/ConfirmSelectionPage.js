import React from 'react'

import { useLocation } from 'react-router-dom'
import hotelImg from '../images/hotel.png'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import {travelEscrowFactoryAddress} from '../addresses';
import {abiTravelEscrowFactory} from '../abi'

import { ethers } from "ethers";


const ConfirmSelectionPage = ({location,value,choseMarriot,choseHyatt,choseHilton,hotel,provider,signer,contactInfo}) => {

    // const {state={}} = useLocation;
    console.log("loc: ",location)
    console.log("valds: ", Math.round(value[0].getTime()/1000) );

    console.log("travel escrow fact add", travelEscrowFactoryAddress)
    console.log("travel escrow fact abi", abiTravelEscrowFactory )

    console.log("provid in csp: ", provider)
    console.log("sender in csp: ", signer)

    let day1 = Math.round(value[0].getTime()/1000);
    let day2 = Math.round(value[1].getTime()/1000);
    let numNights = Math.floor((day2-day1-1)/(24*3600));
    console.log("Num nights ", numNights)

    const createTravelEscrow = () =>{

        const escrowFactoryContract = new ethers.Contract(travelEscrowFactoryAddress, abiTravelEscrowFactory, provider);
        const escrowFactoryContractWithSigner = escrowFactoryContract.connect(signer);
        let tx = escrowFactoryContractWithSigner.createTravel(contactInfo,hotel,120,day1,numNights,250)

    }


  return (
    <div class= "container text-align">
        <br />    
        <h3>These Hotels are available based on your preferred date</h3>
        <br />
        <br />
        <div>{location}</div>
        <br />
        <br />
        <div>{value.join(' - ')}</div>
        <br />
        <br />
        <div>
            Marriot
            <img  width="150" height="auto" src={hotelImg}/>
            <Button onClick={() => choseMarriot()}> Select</Button>
            <p>$2500</p>

        </div>

        <div>
            Hyatt
            <img  width="150" height="auto" src={hotelImg}/>
            <Button onClick={() => choseHyatt()}> Select</Button>       
            <p>$2500</p>
        </div>
        <div>
            Hilton 
            <img  width="150" height="auto" src={hotelImg}/>
            <Button onClick={() => choseHilton()}> Select</Button>      
            <p>$2500</p>
     
        </div>

        <Link to={{ pathname: "/travelSummary"}}>
            <Button onClick={createTravelEscrow}>Confirm </Button>
        </Link> 
        {hotel}


       

    </div>
  )
}

export default ConfirmSelectionPage