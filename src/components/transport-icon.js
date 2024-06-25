import React from 'react'
import * as PropTypes from 'prop-types'
import MetrolinkIcon from "../../static/icons/tram-icon.svg"
import TrainIcon from "../../static/icons/train-icon.svg"
import BusIcon from "../../static/icons/bus-icon.svg"
import CarIcon from "../../static/icons/car-icon.svg"

const TransportIcon = ({type, size}) => {
    const SVGMapper = {
        'Train': TrainIcon,
        'Metrolink': MetrolinkIcon,
        'Bus': BusIcon,
        'Car': CarIcon,
    };

    const AltMapper = {
        'Train': 'Reachable by train',
        'Metrolink': 'Reachable by metrolink',
        'Bus': 'Reachable by bus',
        'Car': 'Reachable by car',
    };

    let SVGComponent = SVGMapper[type];
    let AltComponent = AltMapper[type];
      
    return <SVGComponent alt={AltComponent} width={size} height={size} className='stroke-red fill-red'/>;
}

TransportIcon.propTypes = {
    type: PropTypes.oneOf(['Train', 'Metrolink', 'Bus', 'Car']),
    size: PropTypes.number
}

// Exports
export default TransportIcon