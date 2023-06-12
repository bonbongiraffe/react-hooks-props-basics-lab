import React from "react";

function Bio(props){
    if (!!props.bio)
        return(
            <p>{props.bio}</p>
        );
    else 
        return null;
}

export default Bio;