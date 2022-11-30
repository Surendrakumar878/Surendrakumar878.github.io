/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Image } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <section className="About" id="about">
      <div className="container">
        <div className="About-wrapper">
          <Box className="About-img" w="65%"   >
            <Image w={"65%"} borderRadius="50%" src="/projects/surendra.jpg" alt="surendra"  />
          </Box>
          <div className="About-content">
            <h6>Hello, I'm Surendra Kumar</h6>
            <h3>Full Stack Web Developer</h3>
            <p>
            A skilled 2021 Computer Science Graduate with proficiency in 
            MERN (Full-Stack) Development and aspirations of learning about 
            the new trends in the blockchain environment. 
            Also possesses good communication skills and team collaboration skills.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
