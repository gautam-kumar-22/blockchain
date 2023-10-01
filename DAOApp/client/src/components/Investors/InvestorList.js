import {useState,useEffect} from "react"
function InvestorList({state}){
   const [investors, setInvestors] = useState([]);
   const {contract} = state;
   useEffect(() => {
      async function investor_lists(){
         
         const investors = await contract.methods.InvestorList().call();
         console.log("investor_list", investors);
         setInvestors(investors);
      }
      contract && investor_lists();
   }, [state]);

   return<>
    <div className="list">
    <h3>Investor's List</h3>
      {
      investors.map((investerAddress) => {
         return <p key={investerAddress}>{investerAddress}</p>;
      })};
    </div>
   </>
  }
  export default InvestorList;