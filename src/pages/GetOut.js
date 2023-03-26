import React from 'react';
import Box from '@mui/material/Box';
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";





function Getout() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

    });

    if (!isLoaded) { return <div><Box height={100} />Loading...</div> }
    return Map();

    function Map() {
        return (

            <div>
                <Box position="absolute" left={100} top={100} height={'75%'} width={'75%'}>
                    <GoogleMap
                        zoom={15}
                        center={{ lat: 54, lng: 2 }}
                        mapContainerStyle={{ width: '500px', height: '500px' }}>
                    </GoogleMap>
                </Box>

            </div>
        );
    }
}

export default Getout;