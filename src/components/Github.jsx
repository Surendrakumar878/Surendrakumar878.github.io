import { Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {
  return (
    
    
    <section className="github-st" id="github-">

      <div id="github-stats">
        <div className="container">
          <h1 className="title">Github Status </h1>
          <div className="github-stats-list">
            <div className="github-stat">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=surendrakumar878&theme=indian-flag"
                alt="Github Contributions"
              />
            </div>
            <div className="github-stat">
              <img
                src="https://github-readme-stats.vercel.app/api?username=surendrakumar878&theme=flag-india&show_icons=true&count_private=true"
                alt="Github Stats"
              />
            </div>
            <div className="github-stat">
              <img
                src="https://activity-graph.herokuapp.com/graph?username=surendrakumar878&bg_color=ffffff&color=000080&line=138808&point=ff9933&area=true"
                alt="Github Graph"
              />
            </div>
            <div className="github-stat">
              <Heading marginBottom={6} className="mb-0" style={{textAlign:"center", color:"white"}}>
                Surendra Kumar's contribution calendar
              </Heading>
             
              <GitHubCalendar username="surendrakumar878" year={new Date().getFullYear()} />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Github
