import "./Main.css";
import { useEffect, useState } from "react";

function Accounts({web3, setAddress}) {
  const [provider, setProvider] = useState("None");
  const [balance, setBalance] = useState("None");
  const [connectedAccount, setConnectedAccount] = useState("None");

  useEffect(() => {
    async function allAccounts(){
      const select = document.querySelector("#selectAccount");
      try{
        const all_eth_accounts = await web3.eth.getAccounts();
        setProvider("Ganache");
        for(let i =0; i<all_eth_accounts.length; i++){
          var opt = all_eth_accounts[i];
          var element = document.createElement("option");
          element.textContent = opt;
          element.value = opt;
          select.appendChild(element);
        }
      }catch(error){
        setProvider("Not connected");
        console.log("error");
      }
    }
    web3 && allAccounts();
  }, [web3]);

  async function selectAccount(){
    let selected_account = document.querySelector("#selectAccount").value;
    if(selected_account){
      setAddress(selected_account);
      let accountBalance = await web3.eth.getBalance(selected_account);
      const etherBalance = web3.utils.fromWei(accountBalance);
      setBalance(etherBalance);
      setConnectedAccount(selected_account);
    }else{
      setAddress("Account not selected.");
      setBalance("0");
      setConnectedAccount("Account not selected.");
    }
  }

  
  return (
    <>
      <form className="label1" id="myForm">
        <label htmlFor="selectAccount">Select an account</label>
        <select className="innerBox" id="selectAccount" onChange={selectAccount}>
          <option value="">--select an account--</option>
        </select>
      </form>
      <span className="conAc">Connected Account: {connectedAccount}</span>
      <br></br>
      <span className="acBal">Account Balance:{balance}</span>
      <br></br>
      <span className="provider">Provider : {provider}</span>
    </>
  );
}

export default Accounts;
