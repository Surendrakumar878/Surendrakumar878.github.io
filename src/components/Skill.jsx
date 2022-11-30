import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import  {FaJava} from 'react-icons/fa';
import  {ImHtmlFive, ImDatabase} from 'react-icons/im';
function Skill() {
  
  return (
    <section className="skills">
      <div className="container">
        
        <div className="skills-1" id="skills">
          <Box className="skill" >
            {/* <h3>react</h3>  */}
            < Image id="raect" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
          </Box>
          <div className="portfolios">
             <Box className="portfolio">
             <div className='skillBox skillbox1' >
                    <div className='sillIcon'><Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" w="31%"/></div>
                    {/* <div className='skillTitle'>Web Technologies</div> */}
                    {/* <div className='skillInfo'>HTML, CSS, JavaScript</div> */}
                </div>
             
            </Box>
            <div className="portfolio">
            <div className='skillBox skillbox3'>
                    <div className='sillIcon'> <Image  w="31%" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" /> </div>
                    {/* <div className='skillTitle'>CSS</div> */}
                    {/* <div className='skillInfo'>Material-UI,Styled-Components,Bootstrap</div>  */}
                </div>
              
            </div>
            <div className="portfolio">
            < Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="31%"/>
              
            </div>
            <div className="portfolio">
              {/* <h4>CHAKRA UI</h4> */}
              < Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="31%"/>
            </div> 
            <div className="portfolio">
              {/* <h4>REDUX</h4> */}
              < Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" width="31%"/>
            </div> 
            <div className="portfolio">
            <div className='skillBox skillbox9'>
                    <div className='sillIcon'><Image className='sill' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="31%"></Image></div>
                    {/* <div className='skillTitle'>Mongo DB</div> */}
                    {/* <div className='skillInfo'>Data Base</div>  */}
                </div>
            </div>
            <div className="portfolio">
              {/* <h4>git UI</h4> */}
              < Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" width="31%"/>
            </div>
            <div className="portfolio">
              {/* <h4>bootstrap UI</h4> */}
              < Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" width="31%"/>
            </div>
            <div className="portfolio">
              {/* <h4>express UI</h4> */}
              < Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" width="31%"/>
            </div>
            <div className="portfolio">
              {/* <h4>node UI</h4> */}
              < Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" width="31%"/>
            </div>
            <div className="portfolio">
              {/* <h4>node UI</h4> */}
              < Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="31%"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
