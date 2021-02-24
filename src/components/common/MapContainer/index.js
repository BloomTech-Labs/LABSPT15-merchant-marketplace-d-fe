import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer({ address }) {
  const [mapCenter, setMapCenter] = useState({
    lat: '-34.397',
    lng: '150.644',
  });

  useEffect(() => {
    if (address != '') {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          setMapCenter(results[0].geometry.location);
        } else {
          alert(
            'Geocode was not successful for the following reason: ' + status
          );
        }
      });
    }
  }, [address]);
  return (
    <Map
      google={window.google}
      disableDefaultUI={true}
      zoom={12}
      center={mapCenter}
    >
      <Marker position={mapCenter} />
    </Map>
  );
}

export default MapContainer;
