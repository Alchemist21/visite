import React from 'react'
import Button from 'react-bootstrap/Button'
import {ethers} from 'ethers'

import { travelEscrowFactoryAddress } from '../addresses'
import { abiTravelEscrowFactory, abiTravelEscrow } from '../abi'


const PayHotel = ({provider,signer}) => {
   
   const pay = async () =>{
        const escrowFactoryContract = new ethers.Contract(travelEscrowFactoryAddress, abiTravelEscrowFactory, provider);
        console.log("1")
        const escrowFactoryContractWithSigner = escrowFactoryContract.connect(signer);
        console.log("2")
        console.log(travelEscrowFactoryAddress)
        let travelEscrowAddress = await escrowFactoryContractWithSigner.getLastTravelDeployedAddress();

        console.log("here", travelEscrowAddress)
        

        const travelEscrowContract = new ethers.Contract(travelEscrowAddress, abiTravelEscrow, provider);
        console.log("3")
        const travelEscrowWithSigner = travelEscrowContract.connect(signer);
        let price = await travelEscrowWithSigner.pricePerTraveller();
        console.log("pricePerTraveller",price);
        console.log("sig: ")

        let tx = await travelEscrowWithSigner.payShare({value: price});
        console.log(tx);
        


    }

  return (
    <div class="container text-center">
        <br/>
        <br/>
        <br/>
        <h2 style={{textAlign:'center '}}>Pay for Your Stay</h2>
        <p style={{textAlign:'center '}}>Price: 0.0002 MATIC</p>
        <Button size="lg" variant="secondary"  onClick={pay}>Pay</Button>
    </div>
  )
}

export default PayHotel