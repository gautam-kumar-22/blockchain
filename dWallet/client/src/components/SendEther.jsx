import "./Main.css";
import { useState } from "react";

function SendEther({web3, account}) {
  const [receipt, setReceipt] = useState("None");
  const [toggle, setToggle] = useState(false);

  async function sendEtherToReceiver(){
    var receiver_address = document.querySelector("#to").value;
    var amount = document.querySelector("#value").value;
    if(receiver_address === "" || amount === ""){
      return false;
    }
    const weiValue = web3.utils.toWei(amount, "ether");
    try{
      web3.eth.sendTransaction({
        from: account,
        to: receiver_address,
        value: weiValue
      }).then(function(receipt){
        setReceipt(receipt);
        setToggle(true);
        console.log(receipt);
      });
      
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <form className="box">
        <p className="label">
          <label htmlFor="">Enter Receiver's Address</label>
          <input className="receiver" type="text" id="to"></input>
        </p>

        <p className="label">
          <label htmlFor="">Enter Amount to Send (Ether)</label>
          <input className="receiver" type="text" id="value"></input>
        </p>
        <button className="btn" type="button" onClick={sendEtherToReceiver} >
          Send
        </button>
      </form>
      <div className="box">
        <pre className="json">
          <h3>(Json Response)</h3>
          <code>
            {toggle && JSON.stringify(receipt, ["transactionHash", "blockHash", "effectiveGasPrice", "from", "to", "gasUsed"], 2)}
          </code>
        </pre>
      </div>
    </>
  );
}

export default SendEther;
