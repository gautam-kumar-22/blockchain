import "./investors.css"
function Contribute({state,account}){
  const {contract} = state;
  async function contribute_amount(){
    var amount = document.querySelector("#weiValue").value;
    if(amount === ""){
      console.log("Amount can't be blank.");
      return false;
    }
    if(account === ""){
      alert("You haven't selected any account.");
      return false;
    }
    try{
      await contract.methods.contribution().send({from: account, value: amount, gas: 480000});
    }catch(errors){
      console.log(errors);
    }
    
    console.log("Amount", amount);
  }

 return<>
 <form >
   <label className="label1" htmlFor="weiValue">
   <span className="font">Contribution Amount: </span>
        </label>
    <input type="text" id="weiValue" ></input>
    <button type="button" onClick={contribute_amount} className="button">Contribute</button>
    </form>
    <br></br></>
}
export default Contribute;