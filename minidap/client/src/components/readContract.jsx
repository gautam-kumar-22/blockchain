import { useEffect, useState } from "react";

const ReadContract = ({state}) => {
    const {contract} = state;
    const [data, setData] = useState("No data");
    useEffect(() => {        
        const readData = async() => {
            const data = await contract.methods.retrieve().call();
            setData(data);
        }
        contract && readData();
    }, [contract]);

    return <>
        <p>Read Contract: {data}</p>
    </>
}
export default ReadContract;
