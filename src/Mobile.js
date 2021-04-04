import React,{useEffect,useState} from 'react'
/* This is funtion component, i.e only function and no class is created */
    function Mobile(){ 

        const[mobileno,setmobileno]=useState("+919977000012");
        const[email,setemail]=useState("mail@gmail.com");
        useEffect(()=>{
            console.warn("Hello From Mobile Hook")
        },
        //[])  // [], i.e blank array is used to stop calling hook everytime a new button is clicked(i.e change done). called only once 
        //[email]) //used to call hook only when email is used/updated and not name in this example 
        )        
        return(<div>
           <p>Mobile:{mobileno}</p>  {/* This is JSX --> {mobileno}*/}
           <p>Email:{email}</p>
           <button onClick={()=>{setmobileno("+918877662211")}}>Update Number</button>
           <button onClick={()=>{setemail("mymail@gmail.com")}}>Update Email</button>
           </div>
        )
        
    }
  

    export default Mobile;

    