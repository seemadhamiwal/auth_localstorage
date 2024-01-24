// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Signin from './pages/Signin';
import Forgotpass from './pages/Forgotpass';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App' > 
      <Routes>
        <Route index element={<Signin/>} />;
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Forgotpass" element={<Forgotpass/>}/>;
        <Route path ="/Signup" element={<Signup/>}/>;
        <Route path="/Home" element={<Home/>}/>;
        <Route path="*" element={<Error/>}/>;
      </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
