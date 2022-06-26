import React, { useEffect, useState } from "react";

import {ethers} from 'ethers'

import frame from '../images/frame.png'

import { NFTIssuerAddress , travelEscrowFactoryAddress} from '../addresses'
import { abiNFTIssuer, abiTravelEscrowFactory, abiTravelEscrow } from '../abi'

import style from "../style.css"

let  hotelNameRetrieved, hotelAddressRetrieved, dateStartRetrieved, numberOfNightsRetrieved, travellerAddressRetrieved;
const NFTGallery = ({provider,signer}) => {
    // const retrieveNFT = async () => {
    //     const escrowFactoryContract = new ethers.Contract(travelEscrowFactoryAddress, abiTravelEscrowFactory, provider);
    //     console.log("1")
    //     const escrowFactoryContractWithSigner = escrowFactoryContract.connect(signer);
    //     console.log("2")
    //     console.log(travelEscrowFactoryAddress)
    //     let travelEscrowAddress = await escrowFactoryContractWithSigner.getLastTravelDeployedAddress();

    //     console.log("here", travelEscrowAddress)
        
    //     const nftIssuerContract = new ethers.Contract(NFTIssuerAddress, abiNFTIssuer, provider);

    //     const travelEscrowContract = new ethers.Contract(travelEscrowAddress, abiTravelEscrow, provider);
    //     console.log("3")
    //     console.log(travel)

    //     let dateStart = await travelEscrowContract.dateStart();
    //     console.log(3.1)
    //     let numberOfNights = await travelEscrowContract.numberOfNights();
    //     let hotelName = await travelEscrowContract.hotelName();
    //     console.log(3.5)
    //     let hotelAddress = await travelEscrowContract.hotelAddress();
    //     let travellerAddress = await signer.getAddress();

    //     console.log(4)

    //     let tokenId = ethers.BigNumber.from(ethers.utils.solidityKeccak256([ "string", "address", "uint", "uint", "address" ], [ hotelName, hotelAddress, dateStart, numberOfNights, travellerAddress]));
    //     console.log("tokenId",tokenId);
        
    //     [ hotelNameRetrieved, hotelAddressRetrieved, dateStartRetrieved, numberOfNightsRetrieved, travellerAddressRetrieved] = await nftIssuerContract.metadata(tokenId);
    // }

        // retrieveNFT()

    

    // console.log(hotelNameRetrieved, hotelAddressRetrieved, dateStartRetrieved, numberOfNightsRetrieved, travellerAddressRetrieved)


  return (
    <div>
        <br/>
        <br/>
        <br/>

        <h2 style={{textAlign:'center '}}>Your Booking Confirmation</h2>
        <img className='center' width="350"  height="auto" src={frame} />
    

        
    </div>
  )
}

export default NFTGallery