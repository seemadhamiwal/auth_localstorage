
// import { createContext, useState, useEffect } from "react"
// import { Navigate } from "react-router-dom";





// const ThemeContext = createContext();

// const AuthProvider = ({children}) =>{
    
//     // useEffect(()=>{
//     //     // Simulate the asynchronus check for authentication
        
        
        
//     //     const checkAuthStatus = ()=>{
//     //         const token = localStorage.getItem('loggedInUser');
//     //         // console.log('token',token);
//     //         if(token){
//     //             setIsAuthenticated(true);

//     //             <Navigate to="/Signin" replace />

//     //         }


//     //     };
//     //     checkAuthStatus();

//     // },[]);
//             const[value,setValue]= useState(JSON.parse(localStorage.getItem("loggedInUser") || "{}"));
// console.log('value', value);

//     return(
//         <ThemeContext.Provider value={{value,setValue}}>
//             {children}
//       ;  </ThemeContext.Provider>
//     );
// }


// export default {ThemeContext, AuthProvider};