import React from "react";

function Links(props){
    // console.log(props)
    console.log(props.links.github)
    return(
        <div id="links">
            <h3>Links
                <a href={props.links.github}>{props.links.github}</a>
                <a href={props.links.linkedin}>{props.links.linkedin}</a>
            </h3>
        </div>
    );
}

export default Links;