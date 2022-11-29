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
                        Hello I'm <span className='highlighted-text'>Preeti Bildani</span>
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
                    <a href="https://drive.google.com/file/d/1n_wtR7GrfwU5w1E3kijo2u4ZDTggBCJs/view?usp=share_link" target="_blank" download="resume.pdf">
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
