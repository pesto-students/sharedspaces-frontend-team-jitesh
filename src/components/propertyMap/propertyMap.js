import React from "react";
import {
    GoogleMap,
    // Marker,
    MarkerF
} from "@react-google-maps/api";


//COMPONENT
const PropertyMap = ({ location, zoom }) => {
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
                height: "100%",
            }}
            center={location}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true,
            }}
        >
            <MarkerF
                position={location}
            />
        </GoogleMap >
    );
};

export default PropertyMap;
