import React from 'react';
import './App.css';
//import Button from './Button';
//import Button2 from './Button2';
import Form from './Form';
import { Routes, Route } from 'react-router-dom'
import Loginfrom from './loginform';




function App() {
  return (
    <div className="App">

      {/* <h1 style={{color:"white",backgroundColor:"blue",fontSize:50}}>Hello</h1>*/}
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/loginfrom' element={<Loginfrom />} />
      </Routes>

    </div>

  );
}

export default App;
