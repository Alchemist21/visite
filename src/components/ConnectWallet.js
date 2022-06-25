import React from 'react'

import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from "@web3-react/injected-connector";

const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
   });

const ConnectWallet = () => {
    const { activate, deactivate } = useWeb3React();
    const { active, chainId, account } = useWeb3React(); //info about Connected Wallet
  
  return (
    <div>ConnectWallet
        <button onClick={() => { activate(Injected) }}>Connect Wallet</button>
        <button onClick={deactivate}>Disconnect Wallet</button>
        

        <div>Connection Status: {active}</div>
        <div>Account : {account}</div>
        <div>Network ID : {chainId}</div>
    </div>
    
  )
}

export default ConnectWallet