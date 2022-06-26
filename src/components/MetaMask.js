import React, { Component } from 'react';

import { ethers } from "ethers";


class Metamask extends Component {
  constructor(props) {
    super(props);


    this.state = {
    };
  }
  
  
  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    this.setState({ selectedAddress: accounts[0], balance: balanceInEther })
  }

  renderMetamask() {
    if (!this.state.selectedAddress) {
      return (
        <button onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
      )
    } else {
      return (
        <div>
          <p>Welcome {this.state.selectedAddress}</p>
          <p>Your ETH Balance is: {this.state.balance}</p>
        </div>
      );
    }
  }

  render() {
    return(
      <div>
         {this.renderMetamask()}
      </div>
    )
  }
}

export default Metamask;