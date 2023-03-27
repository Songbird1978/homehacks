import React from 'react';
import Box from '@mui/material/Box';
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import "../Getout.css";


function Getout() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places', 'drawing'],
    });

    if (!isLoaded) { return <div><Box height={100} />Loading...</div> }
    return Map();

    function Map() {
        return (

            <div>
                <Box position="absolute" left={100} top={100} height={100} width={100}>

                    <div className={"searchForm"}>
                        <div>
                            <input type="text" className={"from"} placeholder="Origin"></input>
                        </div>
                        <div>
                            <input type="text" className={"to"} placeholder="Destination"></input>
                        </div>
                        <b className={"travelMode"}>Travel by...</b>
                        <select className={"options"}>
                            <option value="WALKING">Walking</option>
                            <option value="CYCLING">Cycling</option>
                        </select>
                    </div>
                    <GoogleMap className={"Map"}
                        zoom={20}
                        center={{ lat: 53.5500, lng: 2.4333 }}
                        mapContainerStyle={{ width: '100vh', height: '100vh' }}
                        options={{ zoomControl: true, streetViewControl: true, mapTypeControl: true, fullscreenControl: false }}>
                    </GoogleMap>
                </Box>
            </div>
        );
    }
}

export default Getout;