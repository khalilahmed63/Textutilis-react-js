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

  // const [bodycolor, setbodycolor] = useState();
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

const bgcolorremover =()=>{
  document.body.classList.remove('light');
  document.body.classList.remove('dark');
  document.body.classList.remove('primary');
  document.body.classList.remove('success');
  document.body.classList.remove('warning');
  document.body.classList.remove('danger');
}

  const togglemode = (cls) => {
    console.log(cls);
    if(cls==='light'){
      bgcolorremover();
      document.body.classList.add('bg-light'); 
    }
    else if(cls==='dark'){
      // bgcolorremover();
      document.body.classList.add('bg-dark'); 
    }
    else if(cls==='primary'){
      // bgcolorremover();
      document.body.classList.add('bg-primary'); 
    }
    else if(cls==='success'){
      // bgcolorremover();
      document.body.classList.add('bg-success'); 
    }
    else if(cls==='warning'){
      // bgcolorremover();
      document.body.classList.add('bg-warning'); 
    }
    else if(cls==='danger'){
      // bgcolorremover();
      document.body.classList.add('bg-danger'); 
    }

  
  }

 

  return (
    <>



      <BrowserRouter>

        <Navbar SiteName={'Khalil'} About={'myAbout'}  togglemode={togglemode}  />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Textbox  showalert={showalert} />} />
          <Route path="About" element={<About  />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
