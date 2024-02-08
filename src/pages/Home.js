import { useContext,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard";
import ThemeContext from "./SynchedData";

const Home = () => {

    const navigate = useNavigate();
    const storagearray = JSON.parse(localStorage.getItem('user'))??[];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))||{};
    // const { isAuthenticated, setIsAuthenticated } = useContext(ThemeContext);

    console.log("loggedinuser",storagearray)
    const [edul,setEdul]=useState({
        email:loggedInUser?.email,
        password:loggedInUser?.pswd,
    })

    useEffect(() => {
        if (!localStorage.getItem('loggedInUser')) {
            // isAuthenticated(true);
            navigate("/Signin", { replace: true });
        }
    }, [navigate]);



    const getUserDetails=()=>{

        let starray = storagearray?.find((item) => item.email === loggedInUser.email)
        const restUsers=storagearray.filter((user)=>user?.email!==loggedInUser?.email)

        let newobj={...starray};
        const {email,password,...rest}=edul;
        newobj={...newobj,...rest};

    localStorage.setItem('user',JSON.stringify([...restUsers,newobj]));
    
    }

    const handleChange=(e)=>{
        const {name,value}=e?.target;
        setEdul((prevdata)=>({...prevdata,[name]:value}));

    }
    const logout=() => {
        localStorage.removeItem('loggedInUser')
        
        navigate("/Signin" , {replace:true}) 
        
    }

    useEffect(()=>{
        console.log('edul is ',edul);
    },[edul])

    return(
        
        <div className="details">
            <div className="btn" id="flex-Container">
                
                <button className="floatBtn" onClick={()=>navigate("/Home/DashBoard")} > Go To DashBoard</button>
                <div className="right_btn">
                    <button onClick={logout}>Log Out</button>
                </div>
            
            </div>
            
            <div className="jumbotron text-center"> </div>
            <h1 className="header">Fill in details</h1>
            <br/>
            <div>
            <form>
                <fieldset className="fieldset2">
                    <legend className="legend">Highest Qualification</legend>
                    <label htmlFor ="college">College Name</label>
                    <input type="text" id="college" name="college" value={edul.college}
                    onChange={handleChange}/>
                    <label htmlFor="course">Course Name</label>
                    <input type="text" name="course" id="course" value={edul.course}
                    onChange={handleChange}/>
                    <label htmlFor="gradyear">Graduation Date</label>
                    <input type="date" id="gradyear"name="gradDate" value={edul.gradDate}
                    onChange={handleChange}/>
                </fieldset>
                <div className="btn">
                {/* <button onClick={getUserDetails} type="submit" >Add Qualification</button> */}

                </div>
            </form>
            
            </div>

            <div>
            <form>
                <fieldset className="fieldset2">
                    <legend className="legend">Experience</legend>
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={edul.company} 
                    onChange={handleChange}/>
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" name="position" value={edul.position} 
                    onChange={handleChange}/>
                    <label htmlFor="joindate">Joining Date</label>
                    <input type="date" id="joindate" name="joindate" value={edul.joindate}
                    onChange={handleChange}/>
                </fieldset>
                <div className="btn">
                {/* <button onClick={getUserDetails} type="submit" >Add Experience</button> */}

                </div>
            </form>
            
            </div>
            <div>
            <form>
                <fieldset className="fieldset2">
                    <legend className="legend">Current Address</legend>
                    <label htmlFor ="address">Address</label>
                    <input type="text" id="address" name="adress" value={edul.address}
                    onChange={handleChange}/>
                </fieldset>
                <div className="btn">
                {/* <button onClick={getUserDetails} type="submit" >Add Current Address</button> */}

                </div>
            </form>
            
            </div>
            {/* <link> Same as permanent address</link> */}
            <div>
            <form>
                <fieldset className="fieldset2">
                    <legend className="legend">Permanent Address</legend>
                    <label htmlFor ="address">Address</label>
                    <input type="text" id="address" name="permanent_address" value={edul.permanent_address}
                    onChange={handleChange}/>
                </fieldset>
                <div className="btn">
                <button onClick={getUserDetails} type="submit" >Submit</button>
                

                </div>
            </form>
            
            </div>
        </div>
        

    )
}
export default Home;