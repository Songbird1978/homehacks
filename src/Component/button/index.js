import React from "react";
import "./style.css";



function Button (props){
    console.log(props)
    const {content, myFunction} = props
    return(
        <button onClick={()=> myFunction()}>{content}</button>
    )
}
export default Button