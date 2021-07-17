import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h2><img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" className="Icon"/></h2>
            <h1><img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" className="Icon"/>Stephen</h1>
            <div className="Links">
                <Link to="/Post-App/">Home</Link>
                <Link to="/Signin">Sign In</Link>
                <Link to="/Signup">Sign Up</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;