import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const RouteCard = ({key, linkTo, heroImage, title, length, startPoint, excerpt}) => {
    return(
        <article key={key} className='w-full pb-2 my-2 max-w-72 border-2 border-red'>
            <Link to={linkTo} className='w-full'>
                {heroImage && <GatsbyImage className='' image={getImage(heroImage)} alt=''/> }
                <h2 className='mx-2'>{title}</h2>
                {length && <p className='mx-2 pt-0'>Distance: {length}km</p>}
                {startPoint && <p className='mx-2 pt-0'>Starting at: {startPoint}</p>}
                {excerpt && <p className='mx-2'>{excerpt}</p>}
            </Link>
        </article>
    )
}

RouteCard.propTypes = {
    key: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    heroImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    length: PropTypes.string,
    startPoint: PropTypes.string,
    excerpt: PropTypes.string.isRequired,
}