import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import parisImg from '../images/Paris.jpeg'
import nyImg from '../images/NewYork.jpeg'


export const PageOne = () => {
  return (
    <div>
      <p>Ensures secure, private, and shared payment for group travel</p>
      <p>Select Travel Destination</p>

        <Link to="/location">
          <img width="350" height="auto"  src={parisImg}/>
        </Link>
        
        <Link to="/location">
          <img width="350" height="auto"  src={nyImg}/>
        </Link>
    </div>

   
  )
}
