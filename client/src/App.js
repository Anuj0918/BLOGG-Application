import './App.css';
import Post from './post';
import Header from './Header';
import {Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';


function App() { 
  return (
      <Routes>
    <Route path={"/"}  element={<Layout/> }> 
    <Route index element={<Homepage/>} />
    <Route path={'/login'}  element={<Loginpage/>}/>
    <Route path={'/register'} element={<Registerpage/>}/>
    </Route>
    </Routes>


  );
}

export default App;
