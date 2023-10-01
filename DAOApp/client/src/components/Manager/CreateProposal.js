import "./manager.css"
function CreateProposal({state,account}){

    async function proposalCreations(){
        try{
            const {contract} = state;
            var description = document.querySelector("#description").value;
            var amount = document.querySelector("#amount").value;
            var recipient = document.querySelector("#recipient").value;
            if(description === "" || amount === "" || recipient === ""){
                return false;
            }
            console.log(description, amount, recipient);
            await contract.methods.createProposal(description, amount, recipient).send({from: account, gas: 2279689});
        }catch(errors){
            console.log(errors);
        }
        document.querySelector("#description").value = "";
        document.querySelector("#amount").value = "";
        document.querySelector("#recipient").value = "";
    }
   
    return<><form >
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    <input type="text" id="description"></input>
    <label className="label1" htmlFor="amount">
    <span className="font"> Amount Neeed(in Wei):</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient"></input>
    <button className="button" type="button" onClick={proposalCreations}>Create Proposal</button>
    </form><br></br></>
    
   }
   export default CreateProposal;