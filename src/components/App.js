
import React from "react";
import './../styles/App.css';
import Home from './HomePage'
import About from './AboutPage'
import Navigation from './Navigation'

import {Routes, Route, Link} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  )
}

export default App
