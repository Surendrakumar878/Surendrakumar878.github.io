import React from 'react'
// import Typical from 'react-typical';
import "./Profile.css";
import{AiOutlineMail,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,} from "react-icons/ai";
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/" target="_blank">
                            <AiOutlineGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/preeti-bildani-8a8677232/" target="_blank">
                            <AiOutlineLinkedin/>
                        </a>
                        <a href="https://www.instagram.com/_prit_0210/" target="_blank">
                           <AiOutlineInstagram/>
                        </a>
                       
                        <a href="mailto:pritibildani92@gmail.comu" target="_blank" className='mail'>
                           <AiOutlineMail/>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Surendra kumar</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        {/* <Typical
                            loop={Infinity}
                            steps ={[
                                "Enthusiastic Dev 🔴",
                                2000,
                                "Full Stack Fronted developer 🖥",
                                2000,
                                "MERN Devloper 🚀",
                                2000,
                            ]}
                        /> */}
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with frontend operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a  href="Surendra_Kumar_Resume.pdf"
                  download="Surendra_Kumar_Resume.pdf" target="_blank" >
                        <button className='resumeButton'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                    <div className='screenSize'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
