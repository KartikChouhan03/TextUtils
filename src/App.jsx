import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
//import About from './components/About'
//import {
//  BrowserRouter as Router,
//  Routes,
//  Route,
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='#4B4E53';
        document.title = 'TextUtils- dark mode'
    }
    else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        document.title = 'TextUtils- light mode'
    }
  }

  return (
    <>
    {/*</><Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container my-4'>
        {/*<Routes>*/}
          {/*<Route path="/about" element={<About />} />  */}
          {/*<Route path="/" element={} /> */}
          <Textform heading="Enter Text Here" mode={mode} />
        {/*</Routes>*/}
      </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
