import React, { useEffect, useState } from 'react'
import News from './News'
import Navbar from './Navbar';
import Spinner from './Spinner';
function Sports(props) {
    
 

    const [val,setVal]=useState([]);
    const [spin,setSpin]=useState(true);
    
    const fetchData=async()=>{
        
        try{
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&sourcres=cnn&sortBy=publishedAt&apiKey=7e4296f5178440008bd51b11ed83a030`
            const response= await fetch(url);
            const parseData=await response.json();
            console.log(parseData)
            setVal(parseData.articles);
            setSpin(false);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        
        fetchData();
    },[]);
  
  return (
    <>
    <Navbar></Navbar>
    {spin?<Spinner/>:<div className="row container my-3">
       {
         val.map((res)=>
         <div className="col-md-3" >
            <News title={res.title} description={res.description} urlToImage={res.urlToImage} url={res.url} />
        </div>
         )
       }
      
      </div>}
      
    </>
  )
}

export default Sports