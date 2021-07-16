import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import PostName from './PostName'
import AddPost from './AddPost'

const Home = (props) => {

    const [togglepost,settogglepost]= useState(false);   //trying to use for toggling in edit
    const [editID, setEditID] = useState(null);   /*for edit*/
    const [descedit,setdescedit] = useState('');


    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });  /*alert object*/

    const addPost=(username,desc)=>{
        console.log("Adding",desc);
        let sno;
        if(props.posts.length===0){
            sno=0;
        }
        else{
            sno=props.posts[props.posts.length-1].sno + 1;
        }
        const Mypost={
            sno:sno,
            username: username,
            desc: desc,
            like: 0,
            dislike: 0,
        }
        props.setpost([...props.posts,Mypost]);  //adding Mypost to posts
        showAlert(true, 'success', 'Your post is posted in timeline');   /*this is use alert function while adding*/
        console.log(Mypost);
    }

    let newEditPost={sno:null,desc:'',username:''};
    const onEdit=(sno)=>{      //this just changes the values onClicking edit button
        newEditPost=props.posts.find((post)=>{
            return post.sno===sno;
        });
        settogglepost(true);  //onEdit changes value to true. which on adding to list will become false
        setEditID(sno);  //store sno of post to be edited
        setdescedit(newEditPost.desc);  //description is stored
        console.log(newEditPost);
    }


    const onUpvote=(post)=>{
        post.like=post.like+1;
    }
    const onDownvote=(post)=>{
        post.dislike=post.dislike+1;
    }

    const showAlert = (show = false, type = '', msg = '') => {  /*showAlert function described*/
        setAlert({ show, type, msg });
    };

    const onDelete=(post)=>{    /*onDelete is again described here from parent app folder*/
        props.onDelete(post);
        showAlert(true, 'danger', 'post removed');  /*this is used while deleting*/
        settogglepost(false);
        setdescedit('');
    }

    useEffect(() => {
        const timeout = setTimeout(() => {  /*after passing values, Alert uses it*/
          showAlert();                      /*This changes the show value to false*/
        }, 3000);
        return () => clearTimeout(timeout);
      }, [props.posts]);

        
    return ( 
        <div className="Home">
            <h1 className="Buttmmargin"> Add Post</h1>
            {alert.show===true? <p className={`alert alert-${alert.type}`}>{alert.msg}</p>:
             null}
            <AddPost addPost={addPost} showAlert={showAlert} posts={props.posts} togglepost={togglepost} editID={editID} descedit={descedit} setdescedit={setdescedit} setpost={props.setpost} settogglepost={settogglepost} setEditID={setEditID} />
            <h1 className="Buttmmargin"> Posts</h1>
            {props.posts.length===0? "Nothing Posted yet...":

            props.posts.map((post)=>{
                return <PostName post={post} onUpvote={onUpvote} onDownvote={onDownvote} onDelete={onDelete} onEdit={onEdit} key={post.sno}/>
            })
            }
            
        </div>
       
     );
}
 
export default Home;