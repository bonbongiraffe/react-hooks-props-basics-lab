import React from "react";
import Links from "./Links";
import Bio from "./Bio";

function About(props) {
  //console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      <Bio bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github}/>
    </div>
  );
}

export default About;
