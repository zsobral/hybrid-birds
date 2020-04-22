import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { MediaGrid } from '../components/media-grid'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      animals: allFile(filter: { sourceInstanceName: { eq: "animals" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <MediaGrid
        medias={data.animals.nodes.map((photo) => (
          <Img
            style={{ paddingBottom: '100%', height: '0px', width: '100%' }}
            imgStyle={{ objectFit: 'cover' }}
            fluid={photo.childImageSharp.fluid}
          />
        ))}
      />
    </Layout>
  )
}

export default IndexPage
