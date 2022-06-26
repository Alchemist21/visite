import React from 'react'

import { useLocation } from 'react-router-dom'
import hotelImg from '../images/hotel.png'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import style from '../style.css'
import {travelEscrowFactoryAddress} from '../addresses';
import {abiTravelEscrowFactory} from '../abi'

import { ethers } from "ethers";
import { fontSize } from '@mui/system';
import hotelO from '../images/hotelO.png'
import hotelT from '../images/hotelT.png'
import hotelTr from '../images/hotelTr.png'




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
    <div >
        <br />


        <h1 style={{textAlign:'center '} }>Book Your Stay In {location}</h1>
        <br />
        <br />
        <h3 style={{textAlign:'center '} }>{"Dates Selected: " + (value[0].getMonth() +1 )+'/'+value[0].getDate() +'/'+ value[0].getFullYear() + ' - ' + (value[1].getMonth() +1) +'/' +value[1].getDate() +'/'+ value[1].getFullYear() }</h3>
        <br />
        <br />
        <div className='div-o'>
        {/* <tr> */}
            <div>
                <tr>
                <p style={{fontSize:"20px"}}>Marriot - $250</p>
                </tr>
                <br/>
                <tr>
                <img  width="150" height="auto" src={hotelO}/>
                </tr>
                <br/>

                <tr>
                <Button  size="lg" variant="secondary" onClick={() => choseMarriot()}> Select</Button>
                </tr>

            </div>

            <div>
                <tr>
                <p style={{fontSize:"20px"}}>Hyatt - $270</p>
                </tr>
                <br/>
                <tr>
                <img  width="150" height="auto" src={hotelT}/>
                </tr>
                <br/>

                <tr>
                <Button size="lg" variant="secondary" onClick={() => choseHyatt()}> Select</Button>       
                </tr>
            
            </div>
            <div>
                <tr>
                <p style={{fontSize:"20px"}}>Hilton - $290</p>
                </tr>
                <br/>

                <tr>
                <img  width="150" height="auto" src={hotelTr}/>
                </tr>
                <br/>

                <tr>
                <Button size="lg" variant="secondary" onClick={() => choseHilton()}> Select</Button>      
                </tr>
                
        
            </div>
        {/* </tr> */}
        </div>

 
        <br />
        <br />
        <br />

        <div class="container text-center">
        <Link to={{ pathname: "/travelSummary"}}>
            <Button  size="lg" variant="outline-dark" style={{justifyContent:'center'}}onClick={createTravelEscrow}>Confirm </Button>
        </Link> 

        </div>

       

    </div>
  )
}

export default ConfirmSelectionPage