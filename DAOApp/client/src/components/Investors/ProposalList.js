import { useState,useEffect } from "react";

function ProposalList({state}){
   const {contract} = state;
   const [proposals, setProposals] = useState([]);
   useEffect(() => {
      async function proposalLists(){
         
         const proposal_lists = await contract.methods.ProposalList().call();
         console.log("proposal_lists", proposal_lists);
         setProposals(proposal_lists);
      }
      
      contract && proposalLists();
   }, [state]);

   return<>
   <div className="list">
    <h3>Proposal List</h3>
      {proposals.map((proposal) => {
         return (<div key={proposal.id}> 
         <p>ID: {proposal.id}, DESCRIPTION: {proposal.description}</p>
         <p>AMOUNT: {proposal.amount}, RECIPIENT: {proposal.recipient}</p>
         <p>VOTES: {proposal.votes}, END: {proposal.end} IS-EXECUTED: {proposal.isExecuted}</p> <br></br>
         </div>
         );
      })};
      
   </div>
   </>
  }
  export default ProposalList;