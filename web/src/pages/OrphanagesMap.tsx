import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from "react-leaflet";
//import Leaflet from "leaflet";

import 'leaflet/dist/leaflet.css'


import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Louveira</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-23.09239209702951, -46.9771910916633]}
        zoom={13}
        style={{width: '100%', height: "100%" }}>
        <TileLayer
          //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        
      </MapContainer>
      
        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF"/>
        </Link>
      

    </div>
  )
}

export default OrphanagesMap;