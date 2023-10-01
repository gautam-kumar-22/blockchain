import "./investors.css"
function ReedemShare({state,account}){

    async function reedem_share(){
        try{
            const {contract} = state;
            var shares = document.querySelector("#shares").value;
            if(shares === ""){
                console.log("No. of shares not defined.");
                return false;
            }
            contract.methods.reedemShare(shares).send({from: account, gas: 480000});
            console.log("Reedem success.")
        }catch(errors){
            console.log(errors);
        }
    }
   
    return<><form>
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="button" onClick={reedem_share}>Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;