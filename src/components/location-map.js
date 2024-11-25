// Imports
import * as React from 'react'
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from 'react-leaflet'
import { useLocationMapHook } from './graphql-static-hooks/useLocationMapHook'
import { Link } from 'gatsby'
const {getSlug} = require('./helperFunctions')

// Define components
const LocationMap = ({ }) => {

    const allLocations = useLocationMapHook()
    // Do working if needed here
    var left;
    var top;
    var right;
    var bottom;
    allLocations.forEach((location) => {
        if (bottom == null || location.frontmatter.location.latitude < bottom) {
        bottom = location.frontmatter.location.latitude
        }
        if (top == null || location.frontmatter.location.latitude > top) {
        top = location.frontmatter.location.latitude
        }
        if (left == null || location.frontmatter.location.longitude < left) {
        left = location.frontmatter.location.longitude
        }
        if (right == null || location.frontmatter.location.longitude > right) {
        right = location.frontmatter.location.longitude
        }
    });

  //Return final layout here
  return (
    <MapContainer className='my-4' style={{ height: '500px' }} scrollWheelZoom={true} bounds={[[bottom,left],[top,right]]} boundsOptions={{padding: [20, 20]}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
        {
            allLocations.map( (location, i) => (
            <Marker key={i} position={[location.frontmatter.location.latitude, location.frontmatter.location.longitude]}>
                <Popup>
                <span className='font-chillaxSB'>{location.frontmatter.title}</span> 
                <br/>
                <Link to={"/locations/" + getSlug(location.fileAbsolutePath)} className='underline font-chillaxR'>Click here to view</Link>
                </Popup>
            </Marker>
            ))
        }
        </FeatureGroup>
    </MapContainer>
  )
}

// Exports
export default LocationMap