import { useEffect} from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Icono from '../img/icon-location.svg';

export const Mapa = ({obj}) => {
   
    const RecenterAutomatically = ({lat,lng}) => {
        const map = useMap();
         useEffect(() => {
           map.setView([lat, lng]);
         }, [lat, lng]);
         return null;
       }

       const icon = new L.Icon({
        iconUrl: Icono,
        iconRetinaUrl: Icono,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 50),
        className: 'icon'
    });

  return (
    <MapContainer 
        center={[obj.location.lat, obj.location.lng]}
        zoom={14} 
        scrollWheelZoom={true}
        zoomControl={false}
        >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[obj.location.lat, obj.location.lng]} icon={icon}>
     
    </Marker>
    <RecenterAutomatically lat={obj.location.lat} lng={obj.location.lng} />
  </MapContainer>
  )
}
