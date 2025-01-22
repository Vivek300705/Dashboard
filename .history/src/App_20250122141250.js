import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include Navbar Component */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include Navbar Component */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
