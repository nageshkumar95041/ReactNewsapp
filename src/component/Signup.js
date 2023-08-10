import React from 'react'
import axios  from 'axios'
import { useState } from 'react'
import Spinner from './Spinner';

import Navbar from './Navbar'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Signup() {
   
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()
    const [user,setUser]=useState({
       name:"",
       email:"",
       userName:"",
       password:'',
       confirmPassword:""
       
   
    })
       const onChange=(e)=>{
       const name=e.target.name
       const value= name==='image'? e.target.files[0]:e.target.value
        setUser({...user,[name]:value})
       }
   
       const submitHandler=async(e)=>{
           e.preventDefault()
           
           if(!user.name){
            alert("Please fill the Name field",{position:'top-center'})
           }
          else if(user.name.length>35){
            alert("Name length should not exceeds more than 30 characters",{position:'top-center'})
           }
          else if(user.userName.length>35){
            alert("Name length should not exceeds more than 35 characters",{position:'top-center'})
           }
           else if(!user.userName){
            alert("Please fill the userName field",{position:'top-center'})
           }
           else if(!user.email){
            alert("Please fill the email field",{position:'top-center'})
           }
           else if(user.email.length>35){
            alert("email length should not exceeds more than 35 characters",{position:'top-center'})
           }
           else if(!user.password){
            alert("Please fill the password field",{position:'top-center'})
           }
           else if(user.password.length<6){
            alert("password length must be minimum 6 characters",{position:'top-center'})
           }
           else if(user.password.length>35){
            alert("password length should not exceeds more than 35 chatacters",{position:'top-center'})
           }
           else if(user.password !== user.confirmPassword){
            alert("password do not match",{position:'top-center'})
           }
          
           
          
            else{
               
               
                setIsLoading(true)
            axios.post("http://localhost:8000/userRegistration",{name:user.name,userName:user.userName,email:user.userName,password:user.password}).then((res)=>{
                  
                setIsLoading(false)
                       if(res.data.exist){
                        alert("UserName already exist",{position:'top-center'})
                       }
                       
                      else if(res.data.type){
                           
                           setUser({...user,name:"",userName:"",email:"",password:"",confirmPassword:""})
                           
                    alert("Congrats ! registration successful",{position:'top-center'})
                   }
                   else{
                     
                      alert("Opps ! something wrong please try again",{position:'top-center'})
                   }
                 }).catch((err)=>{
                    console.log(err)
                 })
                
                
           }   
        
   
           
        
       }
     return (
   
       <>
   
   <Navbar></Navbar>
       <div className="contact-container">
       
       <div className="col-lg-4 register contact1">
       {isLoading &&<Spinner/>}
       
       <form action='' onSubmit={submitHandler}>
       <h4 className='text-center'>User Signup</h4>
           <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text"  autoComplete='off' className='form-control' name="name" id="name" value={user.name} onChange={onChange} />
           </div>
      
           <div className="form-group">
               <label htmlFor="userName">UserName</label>
               <input type="text"  autoComplete='off'  className='form-control'name="userName" id="userName" value={user.userName} onChange={onChange} />
           </div>
           <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email"  autoComplete='off'  className='form-control'name="email" id="email" value={user.email} onChange={onChange} />
           </div>
           <div className="form-group">
               <label htmlFor="password">Password</label>
               <input type="password"  autoComplete='off'  className='form-control'name="password" id="password" value={user.password} onChange={onChange} />
           </div>
           <div className="form-group">
               <label htmlFor="confirmPassword">Confirm password</label>
               <input type="password"  autoComplete='off'  className='form-control'name="confirmPassword" id="confirmPassword" value={user.confirmPassword} onChange={onChange} />
           </div>
         
   
           <div className="form-group">
               <input type="submit" value="Signup" className='form-control submit-btn' />
           </div>
       </form>
   </div>
   
    </div>
   </>
     )
   }
