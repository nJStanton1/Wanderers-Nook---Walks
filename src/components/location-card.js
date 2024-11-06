import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TransportIcon from './transport-icon'
import { StaticImage } from 'gatsby-plugin-image'


export const LocationCard = ({key, linkTo, heroImage, title, types, travelTime, excerpt}) => {
    return(
        <article key={key} className='w-full pb-2 my-2 max-w-72 border-2 border-accent-red'>
            <Link to={linkTo} className='w-full'>
            {heroImage ? <GatsbyImage className='' image={getImage(heroImage)} alt=''/> : <StaticImage width='300' height='169' className='max-h-72' src={"../../static/logos/Logo.png"}/>}
            <h2 className='mx-2 text-3xl'>{title}</h2>
            <div className='px-2 w-full inline-flex'>
                {
                types.map(type => (
                    <TransportIcon type={type} size={30}/>
                ))
                }
            </div>
            {(travelTime != "00:00" && travelTime != 0) && <p className='mx-2 pt-0'><span className='font-medium'>Travel time:</span> {travelTime} mins</p>}
            <p className='mx-2 text-base'>{excerpt}</p>
            </Link>
        </article>
    )
}

LocationCard.propTypes = {
    key: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    heroImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    types: PropTypes.array,
    travelTime: PropTypes.string,
    excerpt: PropTypes.string,
}