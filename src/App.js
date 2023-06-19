import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// Browser Router is a component that wraps the entire application, allows us to use the Router within it
// Routes Components - is a parent component for the routes
// Route Component - takes 2 props, path for the route, and the element to render
// Link Component - Link between different pages - props: path element
// Nav Link - it can add Active Classes which recognises which page you are on and add

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Job Router</h1>
        <nav>
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
