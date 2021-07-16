import './App.css';
import Navbar from './Navber';
import Home from './My components/Home';
import Signin from './My components/Signin';
import Signup from './My components/Signup';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [posts,setpost] = useState([
    {sno: 1 ,username: 'Chat-Bot', desc: 'Hey there, lets add a new Post' , like:0 , dislike: 0},
  ]);


  const onDelete=(post)=>{
    setpost(posts.filter((e)=>{
      return e!==post;   //event
    }));
  }


  return (
    <div className="App">
      <Router>
       <Navbar></Navbar>
        <Switch>
          <Route exact path="/" render={()=>{
            return (<>
            <div className="content">
             <Home posts={posts} onDelete={onDelete} setpost={setpost}/>
             </div>
            </>)
          }}>
          </Route>
          <Route exact path="/Signin"> 
            <Signin />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
