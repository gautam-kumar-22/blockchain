import { useState, useEffect } from 'react';
import ReadContract from './components/readContract';
import WriteContract from './components/writeContract';
import ABI from "./ABI/ABI.json";
import Web3 from 'web3';
import './App.css';

// 1. Create all components.
// 2. Connect component to blockchain.
// 3. Create an instance of smart contract.

function App() {
  const [state, setState] = useState({web3:null, contract: null});

  useEffect(() => {
    const template = async() => {
      let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      const contractAddress = "0xCF306B795f6Df702BC7cDA160eF342E1566192Cf"; // Address of the deployed contract.
      const contractInstance = new web3.eth.Contract(ABI, contractAddress); // ABI code of deployed contract.
      // console.log(contractInstance);
      setState({web3:web3, contract: contractInstance});
    }
    template();
  },[]);

  return (
    <>
      <ReadContract state={state}/>
      <WriteContract state={state}/>
      <ReadContract state={state}/>
    </>
  )
}

export default App
