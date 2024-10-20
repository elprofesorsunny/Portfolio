import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Works from './pages/Works';
import About from './pages/About';
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}
