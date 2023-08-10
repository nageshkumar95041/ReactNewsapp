import logo from './logo.svg';
import './App.css';
import News from './component/News';
import Navbar from './component/Navbar';
import NewsContainer from './component/NewsContainer';
import Science from './component/Science';
import Health from './component/Health';
import Technology from './component/Technology';
import Entertainment from './component/Entertainment';
import Sports from './component/Sports';
import Business from './component/Business';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/signup",element:<Signup/>},
  {path:"/login",element:<Login/>},
  {path:"/science",element:<Science/>},
  {path:"/business",element:<Business Category="business"/>},
  {path:"/sports",element:<Sports Category="general"/>},
  {path:"/technology",element:<Technology Category="general"/>},
  {path:"/health",element:<Health/>},
  {path:"/entertainment",element:<Entertainment/>}

])

function App() {
  return (
    <>
   
    <RouterProvider router={Router}/>
  
   
      
    </>
  );
}

export default App;
