import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

const Home = () => <div className="page"><h2>🏠 Home Page</h2></div>;
const About = () => <div className="page"><h2>📖 About Us</h2></div>;
const Services = () => <div className="page"><h2>🛠️ Our Services</h2></div>;
const Contact = () => <div className="page"><h2>📞 Contact Us</h2></div>;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <div className="buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/services")}>Services</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer">© 2025 My Website</footer>
    </Router>
  );
};

export default App;
