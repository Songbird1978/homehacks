import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {  useRef, useState } from "react";
import { useJsApiLoader, GoogleMap, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import "../Getout.css";



function Getout() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [directionRes, setDirectionRes] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const originRef = useRef()

    const destinationtionRef = useRef()

    const google = window.google;

    if (!isLoaded) { return <div><h1>Loading...</h1></div> }
    return Map();

    async function calculateRoute() {
        if (originRef.current.value === '' || destinationtionRef.current.value === '') {
            return
        }
         const directionService = new google.maps.DirectionsService()
         const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationtionRef.current.value,
            travelMode: google.maps.TravelMode.BICYCLING
         })

         setDirectionRes(results)
         setDistance(results.routes[0].legs[0].distance.text)
         setDuration(results.routes[0].legs[0].duration.text)

        }
        
        function clearRoute() {
            setDirectionRes(null)
            setDistance('')
            setDuration('')
            originRef.current.value = ''
            destinationtionRef.current.value = ''
        }

    function Map() {
        return (

            <div>
                <Box position="absolute" left={100} top={100} height={100} width={100}>
                <GoogleMap className={"Map"}
                        zoom={20}
                        center={{ lat: 51.509865, lng: -0.118092 }}
                        mapContainerStyle={{ width: '100vh', height: '100vh' }}
                        options={{ zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}>
                            {directionRes && <DirectionsRenderer directions={directionRes}/>}
                            </GoogleMap>
                </Box>
                
                <Box position="absolute" left={100} top={100} height={100} width={100}>
                

                    <div className={"searchForm"}>
                        <div>
                            <Autocomplete>
                            <input type="text" className={"from"} placeholder="Origin" ref={originRef}></input>
                            </Autocomplete>
                        </div>
                        <div>
                        <Autocomplete>
                            <input type="text" className={"to"} placeholder="Destination" ref={destinationtionRef}></input>
                            </Autocomplete>
                        </div>
                        <div>
                            <Button type='submit' onClick={calculateRoute}>
                                Go
                            </Button>
                            <Button  onClick={clearRoute} >
                                Clear
                            </Button>
                        </div>
                        <b className={"travelMode"}>Travel by...</b>
                        <select className={"options"}>
                            <option value="CYCLING">Cycling</option>
                        </select>
                        <p> Distance: {distance}</p>
                        <p> Duration: {duration}</p>
                    </div>
                    
                    </Box>
            </div>
        );
    }
}

export default Getout;