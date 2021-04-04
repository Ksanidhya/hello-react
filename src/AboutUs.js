import React from 'react'

class AboutUs extends React.Component{ 

    componentDidMount(){
        console.warn("About us: called component didmount")
        console.warn("props from AboutUs Mount: "+this.props.Website) //props
    }
    constructor(){
        super()
        console.warn("About us: Called the Constructor")
        this.state={
            name:'Sanidhya',
            age: 27
        }
    }
    componentDidUpdate(){
        console.warn("About us: called component didupdate")
        console.warn("props from AboutUs Update: "+this.props.Website)  //props
    }
    render(){ /* This is Class component, we need to create a class and use render method*/
        
        return(<div>
            <h2>About Us Component</h2> 
            <h2>{this.props.Website}</h2> 
            <p>Actually it's only me not us. {this.state.name} the Lone Wolf !!</p>
            <h2>{this.state.age}</h2>
            <button onClick={()=>{this.setState({name:'Rishu',age:28})}}>Update Details</button>
        </div>)
    }
}

export default AboutUs;