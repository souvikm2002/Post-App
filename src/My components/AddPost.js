import React from 'react';
import { useState } from "react";

const AddPost = (props) => {
    const username="Stephen";
    const [desc, setdesc] = useState("");

    const submit=(e)=>{        //when the form is submitted (submit button us pressed)
        e.preventDefault();     //to prevent reloading
        if(!desc){
            alert("Description cannot be blank")
        }
        else if(props.togglepost){
            props.setpost(
                props.posts.map((item)=>{
                    if(item.sno===props.editID){
                        return {...item, desc:desc};
                    }
                    return item;
                })
            );
            props.showAlert(true, 'edit', 'Post has been successfully edited');
            setdesc("");
            props.settogglepost(false);
            props.setEditID(null);
            props.setdescedit('');
        }
        else{
            props.addPost(username,desc);   //calling addPost function passed from Home and defined there
            setdesc("");
        }
    }

    
    return ( 
        <div>
            <p className="Buttomcontent">Type your post here...</p>
            <form className="inputbox" onSubmit={submit}>
                <input type="text" placeholder="NOTE : To edit, press edit button and write new text here " value={desc} onClick={()=>{setdesc(props.descedit)}} onChange={(e)=>{setdesc(e.target.value)}} style={{
                    maxWidth:"40rem",
                    width:"90%",
                    paddingTop:"10px",
                    paddingLeft:"5px",
                    paddingBottom:"30px",
                    border:"0",
                    outlineStyle:"none",
                    }}/>

            <button type="submit" className="btnsubmit ">{props.togglepost? 'EDIT' : 'Share'}</button>
            </form>
        </div>
     );
}
 
export default AddPost;
