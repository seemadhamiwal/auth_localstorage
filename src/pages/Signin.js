import {useNavigate } from "react-router-dom";
// import Signup from "./Signup";
import { useEffect, useState } from "react";

const Signin = ()=>{
  // const [isAuthenticated,setAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loggedInUser') && JSON.parse(localStorage.getItem('loggedInUser'))) {
      navigate("/Home" , {replace:true});
    }
  }, []);
    // const [formData,setFormData]=useState({
    //   name:"",
    //   pswd:"",
    //   showPassword:"",
    // })
    // setFormData(prevdata=>{
    //   ...prevData,
      
    // })
    // const [username,setuname] = useState("");
    const [password,setPassword] = useState("");
    const [emailname,setEmail] = useState("");
    const [showPassword,setShowPassword] = useState("false");
    const userdetails={
        email:emailname,
        pswd:password,
    }
    
    const handleSignIn = () => {
    
        // Retrieve user details from local storage
        const storedUser = JSON.parse(localStorage.getItem("user"))

        const founduser=storedUser?.find((item)=>item.email===emailname)
        if(!founduser){
          alert("User doesn't exists")
        }
        else if(founduser?.password === password && founduser?.email === emailname){
          console.log("userdetails",userdetails)
          localStorage.setItem('loggedInUser', JSON.stringify(userdetails));
          // setAuthenticated(true);
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
        <label className="required" > Email</label>

            <br/>
            <input type="email"  placeholder="Enter your email" value={emailname}
            onChange={(e) =>
            setEmail(e.target.value)}
            
            />
            
        <br/>
        <br/>
        <label className="required"> Password</label>

            <br/>
            <input type={showPassword ? "password" : "text"} placeholder="Enter your password" value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                        
                        // console.log(e)
                    }/>
        <br/>
        <div className="check">
                         
          <label htmlFor="check">Show Password</label>
                <input
                    id="check"
                    type="checkbox"
                    // name="name"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />

        </div>
                
        </form>
        <div className="btn">
          <button onClick={handleSignIn}> Log In</button>
          <div className="right_btn">
          <button onClick={()=> navigate("/Signup")} >New User</button>

          </div>
        </div>
       
      </div>
    );
    
}
 
export default Signin;

