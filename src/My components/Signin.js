import React from 'react';
import { useState } from "react";

const Signin=()=>{
const [email, setemail] = useState("");
const [password, setpassword] = useState("");

const signin=(e)=>{
    e.preventDefault();     //to prevent reloading
        if(!email||!password){
            alert("Email or password cannot be left blank")
        }
        else{
            setemail("");
            setpassword("");
            alert("Sign-In successful");
        }
}

    return (
        <div className="Bgcolorblack">
        <div className="contentsign">
        <h1 className="Buttmmarginsign moveleft">Sign-In</h1>
        <form onSubmit={signin}>
        <p className="Buttomcontent moveleftcontent">Your Email-Id</p>
                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} style={{
                    width:"93%",
                    height:"3rem",
                    paddingTop:"10px",
                    paddingLeft:"5px",
                    paddingBottom:"10px",
                    borderRadius:"10px",
                    marginBottom:"4rem",
                    }}/>
        <p className="Buttomcontent moveleftcontent">Password</p>
                <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} style={{
                    width:"93%",
                    height:"3rem",
                    paddingTop:"5px",
                    paddingLeft:"5px",
                    paddingBottom:"5px",
                    borderRadius:"10px",
                    marginBottom:"4rem",
                    }}/>


            <button type="submit" className="btnsignin ">Sign-In</button>
            </form>
    </div></div>);
}
 
export default Signin;