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


export default function HomePage({choseParis,choseNYC,onChange,value}) {
    console.log("choseParis",choseParis)
  return (
    <div>
        <br/>
        <p>Ensures secure, private, and shared payment for group travel</p>
        <p>Select Travel Destination</p>
        <button><img  width="350" height="auto" src={parisImg} alt="my image" onClick={() => choseParis()} /></button>
        
        <button><img  width="350" height="auto" src={nyImg} alt="my image"  onClick={() => choseNYC()}/></button>
        <DateRangePicker onChange={onChange} value={value} />

    
{/* 
        <form onSubmit={this.handleSubmit}>
            <label>
            Authorized Travel
            <input type="text" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Save"/>
        </form> */}
        
        <Link to={{ pathname: "/confirmSelection"}}>
            <Button>Confirm Selection</Button>
        </Link> 
        {/* <ConfirmSelectionPage location={this.state.location} date={this.state.date} authorizedTraveler={this.state.authorizedTraveler}></ConfirmSelectionPage> */}

    </div>
  )
}
