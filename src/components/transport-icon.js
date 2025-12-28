import React from 'react'
import * as PropTypes from 'prop-types'
import {ReactComponent as MetrolinkIcon} from "../../static/icons/metrolink-icon.svg"
import {ReactComponent as TrainIcon} from "../../static/icons/train-icon.svg"
import {ReactComponent as BusIcon} from "../../static/icons/bus-icon.svg"
import {ReactComponent as CarIcon} from "../../static/icons/car-icon.svg"

const TransportIcon = ({type, size}) => {
    const SVGMapper = {
        'Train': TrainIcon,
        'Metrolink': MetrolinkIcon,
        'Bus': BusIcon,
        'Car': CarIcon,
    };

    const AltMapper = {
        'Train': "Reachable by train",
        'Metrolink': "Reachable by metrolink",
        'Bus': "Reachable by bus",
        'Car': "Reachable by car",
    };

    let SVGComponent = SVGMapper[type];
    let AltComponent = AltMapper[type];

    const pixelSize = size + 'px'
      
    return (
        <div className="relative flex justify-center">
            <SVGComponent alt={AltComponent} width={pixelSize} height={pixelSize} className='peer fill-brand-deco-1'/>
            <span className="absolute -top-5 whitespace-nowrap text-center rounded z-10 bg-accent-info border border-white p-1 text-sm text-white scale-0 transition-transform duration-500 peer-hover:scale-100">{AltComponent}</span>
        </div>
    )
}

TransportIcon.propTypes = {
    type: PropTypes.oneOf(['Train', 'Metrolink', 'Bus', 'Car']),
    size: PropTypes.number
}

// Exports
export default TransportIcon