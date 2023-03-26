import React from 'react';
import Box from '@mui/material/Box';
import { useLoadScript } from "@react-google-maps/api";
//import Map from "..components/map";




function Getout() {
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: "AIzaSyDuCwpwfpDVHr5-6Zlxz7hh1uzmu81jZ3Y",
        libraries: ["place"],
    });

    if (!isLoaded) return <div><Box height={100} />Loading...</div>;
    
    return (

        <div>
            <Box height={100} />
            {/* <Map />; */}
            
        </div>
    )
}

export default Getout ;