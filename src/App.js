// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textbox from './components/Textbox';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
// } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [bodycolor, setbodycolor] = useState();
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }


  document.body.style.backgroundColor = (bodycolor);

  const togglemode = () => {
    if (mode !== 'dark') {
      setmode('dark');
      setbodycolor('#1e0e23');
      showalert(" Dark mode is Enabled", "success");
      document.title = ('TextUtils Darkmode Enabled')

      // document.getElementById("green-btn-triger").click(); 


    }
    else {
      setmode('light');
      setbodycolor('white');
      showalert(" Light mode is Enabled", "success");

      document.title = ('TextUtils Lightmode Enabled')
    }
  }

  const togglemode1 = () => {
    if (mode !== 'green') {
      setmode('green');
      setbodycolor('#073110');
      showalert(" Green mode is Enabled", "success");
      document.title = ('TextUtils Lightmode Enabled')

    }
    else {
      setmode('light');
      setbodycolor('white');
      showalert(" Green mode is Disabled", "success");
      document.title = ('TextUtils Lightmode Disable')
    }
  }

  return (
    <>


    

<Alert alert={alert} />
    

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar SiteName={'Khalil'} About={'myAbout'} mode={mode} togglemode={togglemode} togglemode1={togglemode1} />} />
        <Route path="/" element={ <Alert alert={alert} />} />
        <Route path="/" element={<Textbox mode={mode} showalert={showalert} />} />
        <Route path="About" element={<About />} />
      
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
