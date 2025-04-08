import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("")
    //const [customers, setCustomers] = useState([])
    const dispatch = useDispatch();

    function addCustomer() {
        if (input) {
            //setCustomers((previousState) => [...previousState, input])
            dispatch(addCustomerAction(input))
            setInput("");
        }
    }
    return <div className="add-cont">
        <h2>Add new coustomer</h2>
        <div className="input-con">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add new customer"/>
            <button onClick={addCustomer}>Add</button>
        </div>
    </div>
}