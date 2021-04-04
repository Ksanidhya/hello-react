import React,{useEffect} from 'react'
import Mobile from  './Mobile'

function ContactUs (props){ 
    useEffect(()=>{
        console.warn("check props from hook adress:",props.Adress)
    })
        return(<div>
            <h2>Contact Us Component</h2>
            <p>Contact us: </p>
                <Mobile/>
                <p>{props.Adress}</p>
        </div>)
    
}

export default ContactUs;