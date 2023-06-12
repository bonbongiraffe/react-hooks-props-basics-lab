import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
let {bio, name, city, color, links} = user;
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color}/>
      <About bio={bio} linkedin={links.linkedin} github={links.github}/>
    </div>
  );
}

export default App;
