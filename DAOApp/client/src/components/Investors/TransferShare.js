import "./investors.css"
function TransferShare({state,account}){

    async function transfer_share(){
        try{
            const {contract} = state;
            var amount = document.querySelector("#amount").value;
            var to = document.querySelector("#to").value;
            if(amount === "" || to === ""){
                console.log("Either amount or to having blank value.");
                return false;
            }
            contract.methods.transferShare(amount, to).send({from: account});
        }catch(errors){
            console.log(errors);
        }
    }

    return<><form>
    <label className="label1" htmlFor="amount">
    <span className="font">Amount:</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="to">
    <span className="font">Address:</span>
        </label>
    <input type="text" id="to"></input>
    
    <button className="button" type="button" onClick={transfer_share}>Transfer Share</button>
    </form><br></br></>
   }
   export default TransferShare;