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

import '../style.css'


export default function HomePage({choseParis,choseNYC,onChange,value,handleChange, handleSubmit}) {
    console.log("choseParis",choseParis)
  return (
    <div>
        <br/>
        <p className='project-name'>Visite</p>
        <p className='paragraph-text'>Ensures secure, private, and shared payment for group travel</p>
        <p>Select Travel Destination</p>
        <button><img  width="350" height="auto" src={parisImg} alt="my image" onClick={() => choseParis()} /></button>
        
        <button><img  width="350" height="auto" src={nyImg} alt="my image"  onClick={() => choseNYC()}/></button>
        <DateRangePicker onChange={onChange} value={value} />

        <form onSubmit={handleSubmit}>
            <label>
                Authorized Travelers
            <input type="text" name="name" onChange={handleChange} />
            </label>
            <input type="submit" value="Save" />
        </form>
        <Link to={{ pathname: "/confirmSelection"}}>
            <Button>Confirm Selection</Button>
        </Link> 
    </div>
  )
}
