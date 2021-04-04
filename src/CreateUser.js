import React, { useState } from 'react'
function CreateUser(){

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[address,setAddress]=useState("");
function CreateUser(){
    let user={name,age,address}
    console.warn(user)
}
    return(<div>
        <h1>Create a New User</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name} />
        <br/><br/>
        <input type="text" onChange={(e)=>setAge(e.target.value)} name="age" value={age} />
        <br/><br/>
        <input type="text" onChange={(e)=>setAddress(e.target.value)} name="address" value={address} />
        <br/><br/>
        <button onClick={CreateUser}>Create User</button>
    </div>
)

}

export default CreateUser;