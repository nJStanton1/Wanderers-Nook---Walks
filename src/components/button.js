import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SearchIcon from "../../static/icons/search-button-icon.svg"
import GoogleMapIcon from "../../static/icons/google-map-icon.svg"

export const PlaceholderButton = ({ text }) => (
    <div className='inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full bg-accent-red hover:bg-accent-red-dark'>
        {text}
    </div>
)

PlaceholderButton.propTypes = {
    text: PropTypes.string.isRequired
}

export const InternalButton = ({ text, linkTo }) => (
    <Link to={linkTo} className='inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full bg-accent-red hover:bg-accent-red-dark'>
        {text}
    </Link>
)

InternalButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const ExternalButton = ({ text, linkTo }) => (
    <a href={linkTo} target="_blank" className='inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full bg-accent-red hover:bg-accent-red-dark'>
        {text}
    </a>
)

ExternalButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const PlaceholderSearchButton = ({ text }) => (
    <div className='inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full bg-accent-red hover:bg-accent-red-dark'>
        <SearchIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </div>
)

PlaceholderSearchButton.propTypes = {
    text: PropTypes.string.isRequired
}

export const InternalSearchButton = ({ text, linkTo }) => (
    <Link to={linkTo} className='inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full bg-accent-red hover:bg-accent-red-dark'>
        <SearchIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </Link>
)

InternalSearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const ExternalSearchButton = ({ text, linkTo }) => (
    <a href={linkTo} target="_blank" className='inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full bg-accent-red hover:bg-accent-red-dark'>
        <SearchIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </a>
)

ExternalSearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const PlaceholderMapButton = ({ text }) => (
    <div className='inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full bg-accent-red hover:bg-accent-red-dark'>
        <GoogleMapIcon alt="Map icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </div>
)

PlaceholderMapButton.propTypes = {
    text: PropTypes.string.isRequired
}

export const InternalMapButton = ({ text, linkTo }) => (
    <Link to={linkTo} className='inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full bg-accent-red hover:bg-accent-red-dark'>
        <GoogleMapIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </Link>
)

InternalMapButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const ExternalMapButton = ({ text, linkTo }) => (
    <a href={linkTo} target="_blank" className='inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full bg-accent-red hover:bg-accent-red-dark'>
        <GoogleMapIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </a>
)

ExternalMapButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const GoogleDirectionsButton = ({ destinationLatitude, destinationLongitude }) => {
    let googleMapsURL = "https://www.google.com/maps/dir/?api=1"
    const originLatitude="53.481515300969875"
    const originLongitude="-2.2370461506010977"
    // Add origin to string
    googleMapsURL = googleMapsURL + `&origin=${originLatitude}%2C${originLongitude}`
    // Add destination to string
    googleMapsURL = googleMapsURL + `&destination=${destinationLatitude}%2C${destinationLongitude}`
    // Add travel mode
    googleMapsURL = googleMapsURL + "&travelmode=transit"
    return (
        <ExternalMapButton linkTo={googleMapsURL} text='Get directions here' />
    )
}

GoogleDirectionsButton.propTypes = {
    destinationLatitude: PropTypes.number.isRequired,
    destinationLongitude: PropTypes.number.isRequired
}