import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import Marker from '../components/Marker';
import {spots} from '../data.js';
import '../index.css';
import {SearchTerm } from '../features/featureSearch/SearchTerm';
import Map from './Map';


mapboxgl.accessToken = 'pk.eyJ1IjoiaW5wcmFpc2VvZmJvcmVkb20iLCJhIjoiY2twY2Niem82MGpxcTJ2cnJsM2dqZjlrYyJ9.2Pgr3XNKf1M69FFcnaeJgg';

 export function App (props){
  const {state, dispatch} = props;

    //const filteredSpots = getFilteredSpots(state.allSpots, state.searchTerm);

  

  return ( 
  <div className="wrapper"> 
   <Map />
  
  <div className="list"> 
  <SearchTerm 
  searchTerm={state.searchTerm}
  dispatch={dispatch}
  
  />
  </div>
  </div>
  
  )
}

// function getFilteredSpots(spots, searchTerm) {
//   console.log(spots);
//   return spots.filter(spot => spot.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }


