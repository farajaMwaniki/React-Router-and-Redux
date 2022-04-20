import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Routes
} from 'react-router-dom';
import './App.css';
import Home from './components/home.jsx';
import Utube from './components/utube.jsx';
import About from './components/about.jsx'

const Nav = (props) => {
  return (
		<div className="nav-bar">
	    <nav>
					<NavLink to="/" className="logo">UTube</NavLink>
	      	<div className="navlinks">
		        <NavLink to="/">Home</NavLink>
		        <NavLink to="/videos">Videos</NavLink>
		        <NavLink to="/about">About</NavLink>
	      	</div>
	    </nav>
		</div>
  );
};

function App() {
  return (
    <main>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/videos" element={<Utube/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
      <div className="footer">
        <p>
          Learn React-router + Redux
        </p>
        <p> - Gebriel and Walter</p>
      </div>
    </main>
  );
}

export default App;