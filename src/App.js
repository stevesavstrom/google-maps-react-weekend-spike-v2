import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "400px",
};

const center = {
  lat: 44.97773,
  lng: -93.2651,
};

const array = [
  {
    name: "The Hutton House",
    lat: 44.99497276974862,
    lng: -93.41553105850683,
  },
  {
    name: "Silverwood Park",
    lat: 45.04800564145538,
    lng: -93.22312600268164,
  },
  {
    name: "Hidden Meadow and Barn",
    lat: 44.484745529394715,
    lng: -92.13573074133765,
  },
  {
    name: "Aria",
    lat: 44.98495516700579,
    lng: -93.26840007015348,
  },
  {
    name: "McNamara Alumni Center",
    lat: 44.97508048418076,
    lng: -93.22747530268451,
  },
  {
    name: "Minneapolis Event Centers",
    lat: 44.98716170847079,
    lng: -93.25373953156898,
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyASfoAL7uKRWX0lJbblrkP4LdcQlWXB694",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <h1>@react-google-maps/api</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}

        {array.map((place, index) => {
          return (
            <Marker key={index} position={{ lat: place.lat, lng: place.lng }}>
              {
                <InfoWindow>
                  <p>{place.name}</p>
                </InfoWindow>
              }
            </Marker>
          );
        })}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);

{
  /* <Marker position={position} >

{
       <InfoWindow>
           <span>Aria</span>
       </InfoWindow>
      }
</Marker>

<Marker position={{lat: 44.97508048418076 , lng: -93.253739531568}} /> */
}
