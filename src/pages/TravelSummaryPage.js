import { render } from '@testing-library/react';
//import React from 'react'
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button'
import NFTGallery from '../components/NFTGallery';
import PayHotel from '../components/PayHotel';
import WaitPayment from '../components/WaitPayment';

import {ethers} from 'ethers'



const TravelSummaryPage = ({location,value,hotel,contactInfo, paymentStatus}) => {

    let contractAddress = '';
    const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);



    return (
    <div>Travel Summary

        <div>
            {location}
            <div>{value.join(' - ')}</div>
            {hotel}
            Authorized Travelers: {contactInfo.join(' , ')}
        </div>

        {(() => {
            if (paymentStatus === 0) {
                return (
                <PayHotel></PayHotel>
                )
            } else if (paymentStatus === 1) {
                return (
                <WaitPayment></WaitPayment>
                )
            } else if (paymentStatus ===2){
                return (
                <NFTGallery></NFTGallery>
                )
            }
        })()}
        {/* <Button >Pay</Button>  this button is for paying*/}


    </div>

    )
}

export default TravelSummaryPage;
