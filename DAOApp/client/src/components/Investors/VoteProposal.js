import "./investors.css"
function VoteProposal({state,account}){
  
    async function vote_proposal(){
        const {contract} = state;
        var voteID = document.querySelector("#voteId").value;
        if(voteID === ""){
            console.log("voteID is not defied.");
            return false;
        }
        try{
            contract.methods.voteProposal(voteID).send({from: account, gas: 480000});
            console.log("Vote proposal success");
        }catch(errors){
            console.log(errors);
        }
    }

    return<><form>
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId"></input>
    <button className ="button" type="button" onClick={vote_proposal}>Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;