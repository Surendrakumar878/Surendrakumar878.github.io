import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip';
import ReactGithubCalendar from '@axetroy/react-github-calendar';
const Github = () => {
  GitHubCalendar(".calendar", "surendrakumar878");
  // or enable responsive functionality
  const s=GitHubCalendar(".calendar", "surendrakumar878", { responsive: true });
  const colourTheme = {
    background: "red",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    
    
    <section className="github-st" id="github-">

      <div id="github-stats">
        <div className="container">
          <h1 className="title">Github Status </h1>
          <div className="github-stats-list">
            <div className="github-stat">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=surendrakumar878&theme=transparent&show_icons=true&count_private=true"
                alt="Github Contributions"
              />
            </div>
            <div className="github-stat">
           
              <img
                src="https://github-readme-stats.vercel.app/api?username=surendrakumar878&theme=transparent&show_icons=true&count_private=true"
                alt="Github Stats"
              />
            </div>
          
            
          </div>
          <Box className="github-stat" style={{paddingLeft: "40px",marginTop:"20px" }} >
              <Heading marginBottom={6} className="mb-0" style={{textAlign:"center", color:"white"}}>
                Surendra Kumar's contribution calendar
              </Heading>
             
              <GitHubCalendar username="surendrakumar878" 
              year={new Date().getFullYear()} 
             
              fontSize={15}
              color="#cd3128"
              
              blockSize={15}
              blockMargin={5}
              // theme={colourTheme}
              
             
               >
    <ReactTooltip delayShow={20} html />
              </GitHubCalendar>
              
            </Box>
        </div>
      </div>
    </section>
  )
}

export default Github
