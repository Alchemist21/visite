import React from 'react'

import { useLocation } from 'react-router-dom'
import hotelImg from '../images/hotel.png'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Link} from 'react-router-dom';


const ConfirmSelectionPage = ({location,value,choseMarriot,choseHyatt,choseHilton,hotel}) => {

    // const {state={}} = useLocation;
    console.log("loc: ",location)
    console.log("valds: ", value)


  return (
    <div>
        <p>These Hotels are available based on your preferred date</p>
        <div>{location}</div>
        <div>{value.join(' - ')}</div>

        <div>
            Marriot
            <img  width="150" height="auto" src={hotelImg}/>
            <Button onClick={() => choseMarriot()}> Select</Button>
        </div>

        <div>
            Hyatt
            <img  width="150" height="auto" src={hotelImg}/>
            <Button onClick={() => choseHyatt()}> Select</Button>        </div>
        <div>
            Hilton 
            <img  width="150" height="auto" src={hotelImg}/>
            <Button onClick={() => choseHilton()}> Select</Button>            </div>

        <Link to={{ pathname: "/travelSummary"}}>
            <Button>Confirm </Button>
        </Link> 
        {hotel}


       

    </div>
  )
}

export default ConfirmSelectionPage