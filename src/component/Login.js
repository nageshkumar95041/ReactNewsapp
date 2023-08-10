import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

import "../App.css"
import Spinner from './Spinner'
import axios from 'axios'
axios.defaults.withCredentials = true

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()

 const [user,setUser]=useState({
   
    userName:"",
    
    password:""

 })
    const onChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
     setUser({...user,[name]:value})
    }

    const submitHandler=async(e)=>{
        e.preventDefault()
        
        if(!user.userName){
            alert("Please fill the userName field")
        }
        else if(!user.password){
            alert("Please fill the password field")
        }
        else{

            const {userName,password}=user
            setIsLoading(true)
            axios.post("http://localhost:8000/userLogin",{userName,password}).then((res)=>{
              setIsLoading(false)
               if(res.data.login===true){
               alert("Login successful")
               
               }

               else{
                alert("invalid credential")
               }
              }).catch((err)=>{
                 console.log(err)
              })

      

        }

          
     
     
    }
 
  return (
    <>
     <Navbar/>
    <div className="login-container col-lg-12">
    <div className="col-lg-4 register login">
    {isLoading && <Spinner/>}
     <h3 className='user-login'>User login</h3>
    <form action='' onSubmit={submitHandler}>
       
        <div className="form-group">
            <label htmlFor="userName">userName</label>
            <input type="text"  autoComplete='off'  className='form-control' name="userName" id="userName" value={user.userName} onChange={onChange} />
        </div>
      
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' name="password" id="password" value={user.password} onChange={onChange} />
        <h5>Forgot your password ?</h5>
        </div>
       
        <div className="form-group">
            <input  type="submit" value="Login" className='form-control login-btn' />
        </div>
        <h5>Not a member? <Link to="/Signup">Signup now</Link></h5>
    </form>
</div>
    </div>

        
</>
  )
}

export default Login