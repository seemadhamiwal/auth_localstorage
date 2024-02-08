import { useNavigate } from "react-router-dom";
// import Home from "./Home";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUname] = useState("");
    const [emailname, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [phonenumber, setphone] = useState("");
    const [showPassword, setShowPassword] = useState("false");
    const RegisterStorage = () => {
        // Check if passwords match
        if (!username || !password || !password2 || !phonenumber || !emailname) {
            alert("Please fill in all fields");
            return;
        }
        if (!isValidateEmail(emailname)) {
            alert('Enter a valid email');
            return;

        } else if (!isValidatePhone(phonenumber)) {
            alert('Enter a valid phone number');
            return;
        }

        //--------------------email validation------------------------
        function isValidateEmail(email) {
            const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            return pattern.test(email);
        }



        //-----------------phone number validation---------------------

        function isValidatePhone(phone) {
            const pattern = /^(?!(\d)\1{9})[5-9]\d{9}$/;
            return pattern.test(phone);

        }


        //---------------------------------------Password validation---------------------------------------------------------------------------


        let lowercaseChars = 0;
        let uppercaseChars = 0;
        let specialChars = 0;
        let countDigit = 0;
        for (let i = 0; i < password.length; i++) {

            const specialCharacter = [
                '!',
                '@',
                '#',
                '$',
                '%',
                '^',
                '&',
                '*',
                '(',
                ')',
                '_',
                '-',
                '+',
                '=',
                '[',
                '{',
                ']',
                '}',
                ':',
                ';',
                '<',
                '>',
            ]
            // Check if passwords match
            if (password !== password2) {
                alert("Passwords do not match!");
                return;

            }
            if (specialCharacter.includes(password[i])) {
                specialChars++;
            } else if (!isNaN(password[i] * 1)) {
                countDigit++;
            }
            else if (password.length < 8) {
                alert('The password must be of atleast 8 characters')
                return;
            }
            else if (password[i] === password[i].toLowerCase()) {
                lowercaseChars++;
            }
            else if (password[i] === password[i].toUpperCase()) {
                uppercaseChars++;
            }
        }

        if (lowercaseChars === 0) {
            alert('Please include lowercase characters in the password')
            return;
        }
        else if (uppercaseChars === 0) {
            alert('Please include uppercase characters in the password')
            return
        } else if (specialChars === 0) {
            alert('Please include special characters in the password')
            return
        } else if (countDigit === 0) {
            alert('Please include numeric digits in the password')
        }




        // Store user details in local storage
        var searchistoryarray = JSON.parse(localStorage.getItem('user'))??[];
        var user = { username: username, password: password, email: emailname, phone: phonenumber };
        const founduser = searchistoryarray?.find((item) => item.email === emailname)
        const duplicatephone = searchistoryarray?.find((item) => item.phone === phonenumber);
        if (founduser) {
            alert("Email already exists")
            return;
        }
        if (duplicatephone) {
            alert('Phone number already registered')
            return;
        }
        else if (username.length !== 0) {
            searchistoryarray.push(user);
        }


        localStorage.setItem('user', JSON.stringify(searchistoryarray));

        // Redirect to home page after registration
        navigate("/Signin");
    };

    const keyDown = (event) => {
        // setkey(event.key)
        const allowedKey = ['0','1','2','3','4','5','6','7','8','9','ArrowLeft','ArrowRight','Delete','Backspace'];
            if(!allowedKey.includes(event.key)){
                event.preventDefault();
            }
    
    }
   
    // console.log('key', key)
    return (
        <div  >

            <br />
            <form className="sign">
                <h1 >Welcome! Register here</h1>
                <label className="required" id="label">Enter your Username</label>

                <br />
                <input type="text" placeholder="Joshua Kol" value={username}
                    onChange={(e) => setUname(e.target.value)} />
                <br />
                <br />
                <label className="required" id="label"> Enter your Email</label>
                <br />
                <input type="email" placeholder="e.g joshuakol@gmail.com" value={emailname}
                    onChange={(e) => setEmail(e.target.value)} />


                <br />
                <br />
                <label className="required" id="label">Phone Number</label>
                <br />

                <input type="tel" maxLength={10} onKeyDown={keyDown} placeholder="9999XXXXXX" value={phonenumber} onChange={(e) => setphone(e.target.value)}  id="phone"  />

                <br />
                {/* <input onKeyDown={keyDown} type="text"/> */}
                <br />
                <label className="required" id="label">Password</label> 
                <br />
                <input type={showPassword ? "password" : "text"} placeholder="Enter your password" value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                        // console.log(e)

                    } id="password" />


                <br />
                <br />
                <label className="required" id="label">Confirm Password</label>

                <br />
                <input type={showPassword ? "password" : "text"} placeholder="Confirm password" value={password2}
                    onChange={(e) =>
                        setPassword2(e.target.value)
                    }
                    id="password2" />




                <br />
                <div className="check">
                    <br />
                    <label htmlFor="check">Show Password</label>
                    <input
                        id="check"
                        type="checkbox"
                        value={showPassword}
                        onChange={() =>
                            setShowPassword((prev) => !prev)
                        }
                    />

                </div>

            </form>
            <br />
            <div className="btn">
                <div >
                    <button onClick={RegisterStorage}> Register</button>
                    <div className="right_btn">
                        <button onClick={() => navigate("/")} > Already a user?</button>

                    </div>
                </div>

            </div>


        </div>
    );

}
export default Signup;