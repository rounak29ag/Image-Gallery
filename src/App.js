import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  
  const [mode,setMode]=useState('light');

  const toggleMode=()=>
  {
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#272a2d';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
      }
    }
  return (
    <>
      <div className='app'>
      <Navbar title='Image Gallery' mode={mode} toggleMode={toggleMode} />
      <Search />
      </div>
    </>
  );
}

export default App;
