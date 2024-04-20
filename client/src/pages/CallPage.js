import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const CallPage = () => {
    const[Input,setInput] = useState("");
    const navigate = useNavigate();


    const handleSubmit = ()=>{
        // Retrieve the JSON string from localStorage
        const userInfoString = localStorage.getItem("userInfo");

        // Parse the JSON string to an object
        const userInfo = JSON.parse(userInfoString);

        // Check if userInfo and username exist
        if (userInfo && userInfo.username) {
    // Set input to the value of the key 'username'
        setInput(userInfo.username);
    } else {
        console.error("The key 'username' does not exist in the userInfo object.");
}

        navigate(`/room/${Input}`)
    }

    return (
        <div>
            <div>
                {/* <input value={Input} onChange={(e)=>setInput(e.target.value)}type="text" palceholder = "Enter the room name"/> */}
                <button onClick={handleSubmit}>JOIN</button>
            </div>
        </div>
    );
}
export default CallPage