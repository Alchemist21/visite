import { render } from '@testing-library/react';
//import React from 'react'
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button'
import NFTGallery from '../components/NFTGallery';
import PayHotel from '../components/PayHotel';
import WaitPayment from '../components/WaitPayment';

import {ethers} from 'ethers'

import {travelEscrowFactoryAddress} from '../addresses';
import {abiTravelEscrowFactory, abiTravelEscrow} from '../abi'



const TravelSummaryPage = ({location,value,hotel,contactInfo, paymentStatus, provider, signer}) => {

    // let contractAddress = '';
    // const [provider, setProvider] = useState(null);
	// const [signer, setSigner] = useState(null);
	// const [contract, setContract] = useState(null);
    const [data, setData] = useState({})
    const [payStatus, setPayStatus] = useState(0)

    console.log("the signer: ", signer)

    
    const getData = async () => {
        console.log("here first")

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
        console.log("4")
        let travellerAddress = await signer.getAddress()
        console.log("sig: ", )

        let hasPaid = await travelEscrowWithSigner.hasTravellerPaid(travellerAddress);
        console.log("5")

        let hasEveryonePaid = await travelEscrowWithSigner.hasEveryonePaid();
        console.log("hasPaid",hasPaid)
        console.log("hasEveryonePaid",hasEveryonePaid)

        if(!hasPaid){
            setPayStatus(0)
        }
        else if (!hasEveryonePaid){
            setPayStatus(1)
        }
        else{
            setPayStatus(2)
        }
        setData(travelEscrowAddress)
    }

    useEffect(() => {
        getData()
    }, [])
    // console.log("correct: ",travelEscrowAddress )


    return (
    <div>Travel Summary

        <div>
            {location}
            <div>{value.join(' - ')}</div>
            {hotel}
            Authorized Travelers: {contactInfo.join(' , ')}
        </div>

        {(() => {
            if (payStatus === 0) {
                return (
                <PayHotel provider={provider} signer={signer}></PayHotel>
                )
            } else if (payStatus === 1) {
                return (
                <WaitPayment></WaitPayment>
                )
            } else if (payStatus ===2){
                return (
                <NFTGallery provider={provider} signer={signer}></NFTGallery>
                )
            }
        })()}
        {/* <Button >Pay</Button>  this button is for paying*/}


    </div>

    )
}

export default TravelSummaryPage;
