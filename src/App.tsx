import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import JsonFile from './JsonFile';
import JsonFile2 from './JsonFile2';
import Context from './context/Context';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/newsdetails/:createdAt" element={<JsonFile/>}/>
        {/* <Route path="/newsdetails/:createdAt" element={<JsonFile2/>}/> */}
       {/*  <Route path='/context' element={<Context/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
