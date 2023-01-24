import React from "react";

import { useState, useEffect } from "react";
function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
    
      windowHeight > 100? setStickyClass("sticky") : setStickyClass("");
    }
  };
console.log(active)
  return (
    <header className={`${stickyClass}`}>
      <div className="header-inner">
        <span className="logo">Surendra.</span>
        <div className="links">
          <a className="link" href="#home">
            Home
          </a>
          <a className="link" href="#about">
          About
          </a>
         
          <a className="link" href="#skills">
          Skills    
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#contact">
          Contact

          </a>
          <a  className="link"  href="Surendra_Kumar_Resume.pdf"
              download="Surendra_Kumar_Resume.pdf"
              target="_blank">
          Resume
          </a>
        </div>
        <span className="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>


        <a className="link" onClick={() => setActive(!active)} href="#home">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#about">
          About
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#skills"
        >
          Skill
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#contact">
        contact
        </a>
        <a className="link"  href="Surendra_Kumar_Resume.pdf"
              download="Surendra_Kumar_Resume.pdf"
              target="_blank">
          Resume
          </a>
      </div>
    </header>
  );
}

export default Header;
