import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import Marker from '../components/Marker';
import {spots} from '../data.js';


 mapboxgl.accessToken = 'pk.eyJ1IjoiaW5wcmFpc2VvZmJvcmVkb20iLCJhIjoiY2twY2Niem82MGpxcTJ2cnJsM2dqZjlrYyJ9.2Pgr3XNKf1M69FFcnaeJgg';

const Map = () => {

    const mapContainerRef = useRef(null);
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.3731, 51.3397],
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

     map.on('load', () => {
   spots.features.forEach(spot => {
       const geometry = spot.geometry;
       const id = spot.properties.id;
       
       const markerNode = document.createElement('div');
       ReactDOM.render(<Marker id={id} />, markerNode);
       
      const popup = new mapboxgl.Popup({className: 'romantic'}).setHTML("<h3>" +
            spot.properties.title +
            "</h3><p>" +
            spot.properties.description +
            "</p>")

       new mapboxgl.Marker(markerNode).setLngLat(geometry.coordinates).setPopup(popup).addTo(map);
     })});

    map.on('load', () => {

      const listeningFunction = (event) => {
     for (let i = 0; i < spots.features.length; i++) {
       if (event.target.id == spots.features[i].properties.id) {
         
         map.flyTo({
           center: spots.features[i].geometry.coordinates,
           zoom: 17
         });
       }
     }
   }

      spots.features.forEach((spot, i) => {
         const list = document.querySelector(".list");
         const listItem = list.appendChild(document.createElement("div"));
        
         listItem.id = "list-" + spots.features[i].properties.id;
            listItem.className = "item";
             const link = listItem.appendChild(document.createElement("a"));
            link.href = "#";
            link.className = "title";
            link.id = spot.properties.id;
            link.innerHTML = spot.properties.title;
            link.className = "title";
            const category = listItem.appendChild(document.createElement("div"));
            category.innerHTML = spot.properties.category;
            category.className = "category";
           
    
            link.addEventListener("click", listeningFunction);

    })
   })

    return () => map.remove();},
   []);

 return ( 
  <div > 
    <div className="map-container" ref={mapContainerRef} 
  >
  </div>
  </div>)
  }

 
export default Map;