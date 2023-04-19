import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Articles, Home } from './pages';

const App = () => {
  return (

    <Router>
      <h1> Server side Rendering Example</h1>
      <ul>
        <li> <Link to="/"> Home</Link></li>
        <li> <Link to="/about"> About</Link></li>
        <li> <Link to="/articles"> Articles</Link></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  )
}

export default App
