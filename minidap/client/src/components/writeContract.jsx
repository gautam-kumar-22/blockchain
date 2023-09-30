import { useEffect } from "react";

const WriteContract = ({state}) => {
    const {contract, web3} = state;

    const writeData = async(e) => {
        e.preventDefault();
        var accounts = await web3.eth.getAccounts();
        var value = document.getElementById("number").value;
        console.log(value);
        await contract.methods.store(value).send({from: accounts[0]});
    }



    return <>
        <p>Write Contract</p>
        <form onSubmit={writeData}>
            <input type="number" name="number" id="number"></input>
            <button type="submit">Set Value</button>
        </form>
    </>
}
export default WriteContract;
