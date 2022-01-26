// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textbox from './components/Textbox';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";

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

  const togglemode2=(cls)=>{
    
    if(cls==='light'){
      setbodycolor('white');
      setmode('light');
    }
    else if(cls==='dark'){
      setbodycolor('#292b2c');
      setmode('dark');
    }
    else if(cls==='primary'){
      setbodycolor('#0275d8');
      setmode('dark');
    }
    else if(cls==='success'){
      setbodycolor('#42ba96');
      setmode('dark');
    }
    else if(cls==='danger'){
      setbodycolor('#d9534f');
      setmode('dark');
    }
    else if(cls==='warning'){
      setbodycolor('#f0ad4e');
      setmode('dark');
    }
  }
  
  
  return (
    <>



      <BrowserRouter>

        <Navbar SiteName={'Khalil'} About={'myAbout'} mode={mode} togglemode={togglemode}  togglemode2={togglemode2} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Textbox mode={mode} showalert={showalert} />} />
          <Route path="About" element={<About mode={mode} />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
