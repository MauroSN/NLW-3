import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import mapMarkerImg from '../Images/map-marker.svg';

import '../Styles/pages/orphanages-map.css';


function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas Crianças estão esperando a sua visita :)</p>
                </header>

                    <footer>
                        <strong>Rio de Janeiro</strong>
                        <span>Rio de Janeiro</span>
                    </footer>
            </aside>

            <Map
                Center={[-22.8972017,-43.5703048]}
                zoom={15}
                style={{ width: '100%', height:'100%'}}
            >
               <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            
            </Link>

        </div>
    )
}

export default OrphanagesMap;
