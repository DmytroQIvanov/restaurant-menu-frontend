import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export const GoogleMapComponent = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAXqKqiuOVxuTOqTRZKN-7lx_EqdGJuRZ8",
        libraries: ['places']
    })
    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    }
    const center = {
        lat: 50.447170,
        lng: 30.521320,
    }


    if (loadError) return <>"Error loading map"</>
    if (!isLoaded) return <>Loading map</>

    return (
        <div>
            {/* <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

            </GoogleMap> */}
            {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script> */}
        </div>
    )
}