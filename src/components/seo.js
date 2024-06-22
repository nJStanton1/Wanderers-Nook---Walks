import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as PropTypes from 'prop-types'

const Seo = ({ pageTitle, pageDescription, pageURL, pageImage }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
          siteSearch
          siteUrl
        }
      }
    }
  `)

  const metaTitle = pageTitle ? `${pageTitle} | ${data.site.siteMetadata.title}` : `${data.site.siteMetadata.title}`
  const metaDescription = pageDescription ? `${pageDescription}` : `${data.site.siteMetadata.description}`
  const metaImageAbsoluteURL = pageImage ? `${data.site.siteMetadata.siteUrl}/${pageImage}` : `${data.site.siteMetadata.siteUrl}/${data.site.siteMetadata.image}`
  const metaPageUrl = `${data.site.siteMetadata.siteURL}${pageURL}`

  return (
    <>
      {/* General tags for all */}
      <meta charset="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={data.site.siteMetadata.author}/>
      <meta http-equiv="Content-Language" content="en"/> 
      <meta name="google" content={data.site.siteMetadata.siteSearch}/>

      {/* Page specidic tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {/* Canonical link is just the page's URL. Must be injected on page creation */}
      <link rel="canonical" href={metaPageUrl} />    

      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImageAbsoluteURL && <meta property="og:image" content={metaImageAbsoluteURL} />}
      <meta property="og:url" content={pageURL} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle}/>
      <meta name="twitter:description" content={metaDescription}/>
      {metaImageAbsoluteURL && <meta name="twitter:image" content={metaImageAbsoluteURL}/>}

    </>
  )
}

Seo.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  pageURL: PropTypes.string.isRequired,
}

export default Seo