import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router> 
    
  );
}

export default App;