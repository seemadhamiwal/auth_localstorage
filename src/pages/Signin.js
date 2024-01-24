import {useNavigate } from "react-router-dom";
// import Signup from "./Signup";
import { useState } from "react";
// import Signup from "./Signup";
// import Home from "./Home";

const Signin = ()=>{
    const navigate = useNavigate();
    const [username,setuname] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState("false");
    
    const handleSignIn = () => {
    
        // Retrieve user details from local storage
        const storedUser = JSON.parse(localStorage.getItem("user"))
        const founduser=storedUser?.find((item)=>item.username===username)
        if(!founduser){
          alert("User doesn't exists")
        }
        else if(founduser.password === password && founduser.username === username){
          navigate('/Home')
        }
        else {
          alert("Password is incorrect .Try Again!")
        }

        console.log("user find",founduser?.password) 
        
    }
    
      //   if (storedUser) {
      //     const user = JSON.parse(storedUser);
    
      //     // Check if username and password match
      //     if (user.username === username && user.password === password) {
      //       // Redirect to home page after successful sign-in
      //       alert("Successful!")
      //       navigate("/Home");
      //     } else {
      //       alert("Invalid username or password");
      //     }
      //   } else {
      //     alert("User not found. Please register.");
      //   }
      // };
    return (
      <div >
        <h1>Welcome! Login here</h1>
        <form className="sign">
        <br/>
        <label  > UserName
            <br/>
            <input type="text"  placeholder="Enter your Username" required value={username}
            onChange={(e) =>
            setuname(e.target.value)}
            
            />
            
        </label>
        <br/>
        <br/>
        <label> Password
            <br/>
            <input type={showPassword ? "password" : "text"} placeholder="Enter your password" value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                        
                        // console.log(e)
                    }/>
        </label>
        <br/>
        <br/>
               
                <label for="check">Show Password</label>
                <br/>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
                
        </form>
       <button onClick={handleSignIn}> Log In</button>
       <button onClick={()=> navigate("/Signup")} >New User</button>
      </div>
    );
    
}
 
export default Signin;

