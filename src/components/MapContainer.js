import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import React from 'react'
const google = window.google;
 
export class MapContainer extends React.Component {

   render(){

   
   return  <Map google={google} zoom={14}>
 
    <Marker onClick={()=>{}}
            name={'Current location'}
           
             />

  </Map>
   }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC8H7bA1-_1ol5S1_N7bLDt1pXUELUXsnw')
})(MapContainer)