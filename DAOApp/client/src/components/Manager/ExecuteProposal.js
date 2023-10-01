import "./manager.css"
function ExecuteProposal({state,account}){
    const {contract} = state;
    async function execute_proposals(){
        if(!account){
            alert("Please select account first.");
            return false;
        }
        var proposalID = document.querySelector("#id").value;
        await contract.methods.executeProposal(proposalID).send({from: account});
    }
   
    return<><form >
    <label className="label1" htmlFor="proposalId">
    <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="id"></input>
    <button className="button" type="button" onClick={execute_proposals}>Execute</button>
    </form><br></br></>
    
   }
   export default ExecuteProposal;