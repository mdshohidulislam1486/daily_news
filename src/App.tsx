import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import JsonFile from './JsonFile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/newsdetails/:createdAt" element={<JsonFile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 