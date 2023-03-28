import React from "react";
import Button from "../button";
import Data from "../../imageData.json"

// function Modal (props){
//     console.log("modal props")
//     console.log(props)
//     const {toggle,Data} = props
//     return(
//         <div style={{backgroundColor: 'gray', height: '100vh', width: '100vw', zIndex: '1', position: 'absolute', display: "flex", justifyContent:'center', alignItems:'center', flexDirection:'column'}}> Modal 
//         <Button myFunction={toggle} content={"Hide Modal"} />
//         <h1>{Data.title}</h1>
//         <p>{Data.description}</p>
//         </div>
//     )
// }

const Modal = Data && Data.map(dataItem => {
    return (
        <div style={{backgroundColor: 'white', height: '100vh', width: '100vw', zIndex: '1', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirections: 'column'}} className="modal">Modal
            <div className="modal-content">
            <h1>{dataItem.title}</h1>
            <p>{dataItem.description}</p>
            <Button>clickme</Button>
            </div>
        </div>
    )

})


export default Modal