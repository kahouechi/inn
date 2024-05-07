import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ScrollToTop from './utils/ScrollToTop';
import Layout from './Layout';
import Home from './pages/Home.jsx';
import AllEats from './pages/AllEats.jsx';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-eats" element={<AllEats />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App