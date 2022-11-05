import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import { smoothScroll } from "./helper";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.onscroll = function () {
      let navbar = document.querySelector(".nav-bar");
      if (window.scrollY > 20) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    };
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      let target = link.getAttribute("href");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        smoothScroll(target, 1000);
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
