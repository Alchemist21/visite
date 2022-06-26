import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import parisImg from '../images/Paris.jpeg'
import nyImg from '../images/NewYork.jpeg'
import BasicDatePickerOne from '../components/BasicDatePickerOne';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateRangePicker from '@wojtekmaj/react-daterange-picker';//date time picker

import Button from 'react-bootstrap/Button'
import ConfirmSelectionPage from './ConfirmSelectionPage';
import { touchRippleClasses } from '@mui/material';
import { ethers } from "ethers";
import { useState } from 'react';


import './App.css';

import '../style.css'


export default function HomePage({choseParis,choseNYC,onChange,value,handleChange, handleSubmit,contactInfo}) {

    // const [walletAddress, setWalletAddress] = useState("");
    // const [addrs, setAddrs] = useState([]);

    // const provider = new ethers.providers.Web3Provider(window.ethereum);


    // async function requestAccount(){
    //     console.log("hey")

    //     try{
    //         const accounts = await window.ethereum.request({
    //             method: "eth_requestAccounts",
    //         });
    //         setWalletAddress(accounts[0]);
    //         setAddrs(walletAddress,contactInfo)
    //         console.log("acc" ,accounts);
    //     }catch(error){
    //         console.log("err", error)
    //     }

    // }
    // async function connectWallet() {
        
    //       await requestAccount();
    
    //       const provider = new ethers.providers.Web3Provider(window.ethereum);
    //       window.provider = provider;
        
    //   }
    
    
    console.log("choseParis",choseParis)
  return (
    
    <div class="container text-center">
        {/* <button className='this-button'
            onClick={requestAccount}
        
        >Connect Wallet</button> */}
        <br />
        <br />

        <h1>Visite</h1>
        <h2 style={{fontSize:"20px"}}>Enabling Secure, Private and Shared Payment for Group Travel</h2>
        <br />
        <p>Select Travel Destination</p>
        <br />
        <br />
        <div>
            <button><img  width="270" height="auto" src={parisImg}  onClick={() => choseParis()} /></button>
            &nbsp;&nbsp;&nbsp;
            <button><img width="270" height="auto" src={nyImg}   onClick={() => choseNYC()}/></button>

        </div>
       
        <br />
        <br />
        <DateRangePicker onChange={onChange} value={value} />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
            <label>
                Authorized Travelers  &nbsp;&nbsp;&nbsp;
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <input type="submit" value="Save" />
        </form>
        <br />
        <Link to={{ pathname: "/confirmSelection"}}>
            <Button variant="secondary">Confirm Selection</Button>
        </Link> 
        <br/>
        <br/>
    </div>
  )
}
