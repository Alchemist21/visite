import { render } from '@testing-library/react';
import React from 'react'

import Button from 'react-bootstrap/Button'
import NFTGallery from '../components/NFTGallery';
import PayHotel from '../components/PayHotel';
import WaitPayment from '../components/WaitPayment';


const TravelSummaryPage = ({location,value,hotel,contactInfo, paymentStatus}) => {

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
