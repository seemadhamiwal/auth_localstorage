import { useNavigate } from "react-router-dom";
// import Home from "./Home";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const [username , setUname] = useState("");
    const [password, setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [showPassword, setShowPassword] = useState("false");
    const RegisterStorage = () => {
        // Check if passwords match
        if (!username || !password || !password2) {
            alert("Please fill in all fields");
            return;
          }
        
          // Check if passwords match
          if (password !== password2) {
            alert("Passwords do not match!");
            return;
          }
    
        // Store user details in local storage
        var searchistoryarray = JSON.parse(localStorage.getItem('user') || '[]');
        var user = { username : username , password : password};
        if(username.length != 0){
            searchistoryarray.push(user);
        }

        localStorage.setItem('user', JSON.stringify(searchistoryarray));
    
        // Redirect to home page after registration
        navigate("/Signin");
      };

    return (
        <div  >
            <h1>Welcome! Register here</h1>
        <br/>
        <form className="sign">
        <label > Enter your UserName
            <br/>
            <input type="text"  placeholder="Enter your Username" required value={username}
            onChange={(e) => setUname(e.target.value)}/>
            
        </label>
        <br/>
        <br/>
        <label>Password
            <br/>
            <input type={showPassword ? "password" : "text"} placeholder="Enter your password" value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                        // console.log(e)
                    
                    } id="password"/>
            
        </label>
        <br/>
        <br/>
        <label>Confirm Password
            <br/>
            <input type={showPassword ? "password" : "text"} placeholder="Confirm password" value={password2}
                    onChange={(e) =>
                        setPassword2(e.target.value)
                    }
                id="password2"/>


            
            
        </label>
        <br/>
        <br />
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
                <br/>
                <button onClick={RegisterStorage}> Register</button>
                <button onClick={()=> navigate("/Signin")} > Already a user?</button>
        </form>
        
        </div>
    );
    
}
export default Signup;