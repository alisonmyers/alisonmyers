import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const ImageSlider = (props) => {
    const data = props.allFile.edges; 

    return (
        <React.Fragment>
             {
            data.map(node => (
                <div>
                    <p>{node.id}</p>
                </div>
            ))}
        </React.Fragment>
           
  )
}

export default props => (
    <StaticQuery>
        query={graphql`
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
        }
    </StaticQuery>
)


export default ImageSlider