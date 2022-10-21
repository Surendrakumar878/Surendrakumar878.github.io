/* eslint-disable jsx-a11y/anchor-is-valid */
import { Image } from "@chakra-ui/react";
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <Image w="100%" boxSize={400} src="/projects/surendra.png" alt="surendra" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Surendra Kumar</h6>
            <h3>Full Stack Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
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

export default Banner;
