import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'aos/dist/aos.css'
import Aos from 'aos'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";

function App() {

  useEffect(() => {
    Aos.init();
  })


  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="arrow-up"><a href="#"><i class="fa-solid fa-arrow-up"></i></a></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
