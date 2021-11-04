import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const  [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout( ()=>{
      setalert(null);
    },1500);
  }

  const togglemode=()=>{
    if(mode==="dark")
    {
      setmode("'light");
      document.body.style.background='white';
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils-Light Mode";
      // setInterval(()=>{
      //   document.title="TextUtils Install Now";
      // },2000);
      // setInterval(()=>{
      //   document.title="TextUtils is Amanzing";
      // },1500);
    }
    else
    {
      setmode("dark");
      document.body.style.background='#331f38';
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils-DarkMode";
     
    }
  }
  return (
    <>
      <Router>
     
     <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
     <Alert alert={alert}/>
     <div className="container my-3" >
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Enter The Text to Analyze below" mode={mode} />
          </Route>
      </Switch>
      
    
     </div>
     </Router>
    </>
  );
}
export default App;
