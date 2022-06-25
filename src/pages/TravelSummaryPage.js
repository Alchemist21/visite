import React from 'react'

import Button from 'react-bootstrap/Button'

const TravelSummaryPage = ({location,value,hotel,contactInfo}) => {
  return (
    <div>Travel Summary

        <div>
            {location}
            <div>{value.join(' - ')}</div>
            {hotel}
            Authorized Travelers: {contactInfo.join(', ')}
        </div>

        <Button>Pay</Button>


    </div>
    
  )
}

export default TravelSummaryPage;
