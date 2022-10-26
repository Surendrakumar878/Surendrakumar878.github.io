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
      console.log(windowHeight)
      windowHeight > 200 ? setStickyClass("sticky") : setStickyClass("");
    }
  };
console.log(active)
  return (
    <header className={`${stickyClass}`}>
      <div className="header-inner">
        <span className="logo">Surendra.</span>
        <div className="links">
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="#banner">
          About
          </a>
         
          <a className="link" href="#experiences">
          Skills    
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#conctact">
          Conctact

          </a>
          <a className="link" href="https://drive.google.com/file/d/1rdnlLBUJtzV89PklADzML3YjBRPEhQSv/view?usp=sharing">
          Resume
          </a>
        </div>
        <span className="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>


        <a className="link" onClick={() => setActive(!active)} href="/">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#About">
          About
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#Skill"
        >
          Skill
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#conctact">
        conctact
        </a>
      </div>
    </header>
  );
}

export default Header;
