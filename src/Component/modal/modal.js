import React from "react";
import Button from "../button";

function Modal (props){
    console.log("modal props")
    console.log(props)
    const {toggle,data} = props
    return(
        <div style={{backgroundColor: 'gray', height: '100vh', width: '100vw', zIndex: '1', position: 'absolute', display: "flex", justifyContent:'center', alignItems:'center', flexDirection:'column'}}> Modal 
        <Button myFunction={toggle} content={"Hide Modal"} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        </div>
    )
}
export default Modal