import React from 'react'
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from 'web3modal';
import { HashRouter, Route, useNavigate } from 'react-router-dom';


//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    4: "https://eth-rinkeby.gateway.pokt.network/v1/lb/62b7234c123e6f0039842814"

    // ...
  },
});


function ConnectWalletTwo() {
 
// @ts-ignore

const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
            4: "https://eth-rinkeby.gateway.pokt.network/v1/lb/62b7234c123e6f0039842814"
        }
      },
    },
  },
})

// const Navigate = useNavigate();

async function getProvider() {
  const ethProvider = await web3Modal.connect()
  const addresses = await ethProvider.enable()
//   Navigate("/Home") 
}
    return (

    
    <button onClick={getProvider}>
         Connect
    </button>

  )
}

export default ConnectWalletTwo;