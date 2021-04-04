import './App.css';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs';
import Mobile from './Mobile'
import React, { useState } from 'react';
import ContactUsEvent from './ContactUsEvent';
import Users from './Users';
import CreateUser from './CreateUser';
import Home from './Home';
import Button from 'react-bootstrap/Button'
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


function App() {
  let time = new Date().toLocaleString();
  const [website, setwebsite] = useState("Bliskosc.com")
  const [adress, setAdress] = useState("Hi Tech City")
  const [count1, setCount1] = useState(10)
  let a = window.prompt('choose layout: state, event,other')
  if (a === "state") {
    return ( //this is till props
      <div className="App">

        <p> Don't call me, niether whatsapp: <Mobile /></p>
        <h1>Hello From You React App. React is Cool !!!</h1><br />
        <h2>This is my first react project</h2>
        <Button variant="success">Hello !!!</Button>{' '}
        <AboutUs Website={website} /> {/* props*/}
        <button onClick={() => { setwebsite("Sanidhya.com") }}>Update Website</button>
        <ContactUs Adress={adress} />
        <button onClick={() => { setAdress("29th and Park") }}>Update Adress</button>

      </div>
    );
  } else if (a === "event") { //this is from events
    return (<div>
      <ContactUsEvent />
    </div>);
  } else if (a === "listing") { //this is from lisitng
    return (<>
      <Users />
    </>);
  } else if (a === "boot") { //for bootstrap
    // }else{ //todelete
    return (<>
      <p>{count1}</p>
      <button onClick={() => { setCount1(count1 - 1) }}>Decrease value</button>
      <p>{time}</p>
      <Button variant="success">Success</Button>{' '}
      <Button variant="outline-warning">outline+Warning</Button>{' '}
      <Button variant="primary" size="lg">
        Large button
    </Button>{' '}
      <Button variant="secondary" size="sm">
        Small button
    </Button>
      <Button variant="primary" size="lg" block>
        Block level button
    </Button>{' '}
      <Button variant="primary" size="lg" disabled>
        Primary button Disabled
  </Button>

    </>);
  }
  else if (a === "form") { //this is from lisitng
    return (<>
      <CreateUser />
    </>);
  }
  //else if(a==="roue"){
  else {
    return (
      <div >
        <Router>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#features"><Link to="/about">About Us</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link to="/contact">Contact Us</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link to="/Mobile">Mobile</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link to="/CreateUser">Create User</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link to="/Users">Users List</Link></Nav.Link>
              </Nav>
            </Navbar>
            <Switch>
          <Route path="/about">
            <AboutUs/>
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
          <Route path="/Mobile">
            <Mobile/>
          </Route>
          <Route path="/CreateUser">
            <CreateUser/>
          </Route>
          <Route path="/Users">
            <Users/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </Router>
      </div>
    );

  }
}

export default App;
