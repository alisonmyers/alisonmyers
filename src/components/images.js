import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const ImageSlider = ({ data }) => {

    const images = data.allFile.edges;

    return (
        {
            images.map(image => (
                <div>
                    <p>{image.node.id}</p>
                </div>
        ))}
        
  )
}

export const pageQuery = graphql`
    query ReturnImagesQuery {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
            node {
            id
            name
            relativePath
            childImageSharp{
                gatsbyImageData(layout:FIXED)
    
            }
            }
        }
        }
    }
`