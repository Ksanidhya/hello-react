import React, { useState } from 'react'


function ContactUsEvent (){ 
    function test(){
        console.warn("Hello on Click outside func test().")
    }

    function check(e){
        let str=e.target.value.trim()
        let len=str.length
        setVal(len)
        if(len<=7){
        document.getElementById("demo").style.color = 'red';
        document.getElementById("demo").innerHTML="It should be atleast 8 letters long";
        console.warn("It should be atleast 8 letters long")
        }
        if(len>7){
        document.getElementById("demo").style.color = 'green';
        document.getElementById("demo").innerHTML="Correct :)";
        console.warn("It is 8 letters long")
        }
    }
        const[val,setVal]=useState(0)
        return(<div>
            <h2>Contact Us Component</h2>
            <p><button onClick={()=>console.warn("Hello on Click.")}>Click me</button> </p>{/*In react calling =>function/normal function with event is called binding */}
            <p><button onClick={test}>click me: Outside function</button> </p>{/*Example of calling outside function or const*/}
           <p> <button onClick={console.warn("Hello on Click1.")}>Click me1</button></p> {/*This console will be called before button is clicked(not binded) and this will not respond on click*/}
           <p> <input type="text" onChange={check}/> </p>
           <p id="demo"></p>
           {/*To Get the value if text in button, we will now use state*/}
           <p> <button onMouseOver={()=>document.getElementById("demo1").innerHTML=val}>Check Lenght </button></p>
           <p id="demo1"></p>
            </div>)
    
}

export default ContactUsEvent;