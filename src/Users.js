import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'

function Users(){

    const[user,setUser]=useState([])
    useEffect(()=>{
      fetch("https://reqres.in/api/users").then((data)=>{
        data.json().then(result=>{
          console.warn("result",result.data)
          setUser(result.data)
        })
      })
    },[])
    return(<div>
        <h1>This is User Listing</h1>
        {
            <div>User length : {user.length}</div>
        }
        <Table striped bordered hover variant="dark" size="sm"  responsive>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
    {
      user.map((item,index)=>
      <tr key={index}>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      </tr>
      )
    }
</Table>
    </div>

    )
}

export default Users