import React from 'react';
import { useState } from "react";

const Signup = () => {

    const [Name, setName] = useState("");   //defining values to enter in input text
    const [Email, setEmail] = useState("");
    const [Number, setNumber] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");

    const signup=(e)=>{
        e.preventDefault();     //to prevent reloading
            if(!Email||!Name||!Number||!password||!conpassword){     //using the values to check if they meet required parameter
                alert("Credentials cannot be left blank")
            }
            else if(password!==conpassword){
                alert("Invalid Credentials")
            }
            else{
                setName("");    //we set all values to blank once all the credentials are given correct
                setEmail("");
                setNumber("");
                setpassword("");
                setconpassword("");
                alert("Account has been created successfully");
            }
    }

    return ( 
    <div className="contentsignup">
        <h1 className="Buttmmarginsign moveleft">Sign-Up</h1>
        <form onSubmit={signup}>
        <div style={{display:"flex", marginTop:"4rem", justifyContent:"space-between"}}>
        <p className="Buttomcontenttext">Your Name:-</p>
        <input type="text" placeholder="James Crook" value={Name} onChange={(e)=>{setName(e.target.value)}} className="linksignup" />
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <p className="Buttomcontenttext">Your Email:-</p>
        <input type="email" placeholder="xyz@abc.com" value={Email} onChange={(e)=>{setEmail(e.target.value)}} className="linksignup"/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <p className="Buttomcontenttext">Mobile number:-</p>
        <input type="tel" placeholder="1234567890" pattern="[0-9]{10}" required value={Number} onChange={(e)=>{setNumber(e.target.value)}} className="linksignup" />
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <p className="Buttomcontenttext">Password:-</p>
        <input type="password" placeholder="2@47w3$Z" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="linksignup" />
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <p className="Buttomcontenttext">Confirm Password:-</p>
        <input type="password" placeholder="2@47w3$Z" value={conpassword} onChange={(e)=>{setconpassword(e.target.value)}} className="linksignup" />
        </div>
        <button type="submit" className="btnsignUp ">Sign-Up</button>

        </form>
    </div> );
}
 
export default Signup;