import { useState, useEffect } from "react";
import Web3 from "web3";
import Welcome from "./components/Welcome.jsx";
import Accounts from "./components/Accounts.jsx";
import SendEther from "./components/SendEther.jsx";
import "./App.css";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  function setAddress(address){
    setAccount(address);
  }

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = new Web3("HTTP://127.0.0.1:7545");
        setWeb3(web3);
        // console.log(web3);
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);
  return (
    <div className="Flex">
      <div className="welMargin">
        <Welcome />
      </div>
      <div className="Account">
        <Accounts web3={web3} setAddress={setAddress}/>
      </div>

      <div>
        <SendEther web3={web3} account={account} />
      </div>
    </div>
  );
};
export default App;
