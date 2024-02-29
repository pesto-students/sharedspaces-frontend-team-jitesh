import React from "react";
import {
    GoogleMap,
    // Marker,
    MarkerF
} from "@react-google-maps/api";


//COMPONENT
const Map = ({ location, zoom, allProperties }) => {
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
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true,
            }}
        >
            {allProperties?.map(p =>
                <MarkerF
                    position={{
                        lat: parseFloat(p.lat), lng: parseFloat(p.lng)
                    }}
                />
            )}

        </GoogleMap >
    );
};

export default Map;
