// import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Signin from './pages/Signin';
import Forgotpass from './pages/DashBoard';
import Home from './pages/Home';
import { useState ,useEffect, Children} from 'react';
import DashBoard from './pages/DashBoard';
import AuthProvider from './pages/PrivateRoutes';
import { createContext , useContext , } from 'react';
import ThemeContext from './pages/SynchedData';
// import ProtectedRoute from './pages/PrivateRoutes';
// import PrivateRoute from './pages/PrivateRoutes';
import PrivateRoutes from './pages/PrivateRoutes';
function App() {
  
  const navigate = useNavigate();

  const allowed_user  = JSON.parse(localStorage.getItem('loggedInUser'))||{}

  useEffect(()=>{

    if(!localStorage.getItem('loggedInUser') && !JSON.parse(localStorage.getItem('loggedInUser'))){
  
      navigate("/Signin", {replace:true})
      
    }
  },[])

  return (
    
      
        <div className='App' > 
          <Routes>
            <Route index element={<Signin/>} />;
            <Route path="/Signin" element={<Signin/>}/>
            <Route path='/Home' element={
             <PrivateRoutes> <Home /></PrivateRoutes>
            }/>
            <Route path='/Home/DashBoard' element={<PrivateRoutes><DashBoard/></PrivateRoutes>}/>;
            <Route path ="/Signup" element={<Signup/>}/>;
            <Route path="*" element={<Error/>}/>;
          </Routes>

      </div>
      
    
  );
}

export default App;
