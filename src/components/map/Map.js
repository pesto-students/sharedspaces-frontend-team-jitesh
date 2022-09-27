import React from "react";
import {
    GoogleMap,
    // Marker,
    MarkerF
} from "@react-google-maps/api";


//COMPONENT
const Map = ({ location }) => {
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        // setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <GoogleMap
            mapContainerStyle={{
                width: "100%",
                height: "88vh",
            }}
            center={location}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true,
            }}
        >
            <MarkerF position={location} />
        </GoogleMap >
    );
};

export default Map;
