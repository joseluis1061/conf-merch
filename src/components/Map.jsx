import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import '../style/components/Map.css';

const Map = ({location}) => {
  const defaultCenter = {
    lat: location.latitude, lng: location.longitude
  }
  console.log(defaultCenter);
  return (
    <div className='leaflet-container'>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin="anonymous"
      />

      <MapContainer center={[defaultCenter.lat, defaultCenter.lng]} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[defaultCenter.lat, defaultCenter.lng]}>
          <i className="fa-solid fa-location-dot"></i>
        </Marker>
      </MapContainer> 
    </div>
  );
}

export default Map;
