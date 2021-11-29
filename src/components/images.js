import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const ImageSlider = () => {

    const data = useStaticQuery(
        graphql`
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
    );

    const imageData = data.allFile.edges;
    console.log(imageData)

    imageData.forEach(node => console.log(node))


    return(
        <div>
            <h1>Hello</h1>
            {
                imageData.map(({node}, i) => (
                    <div key={i}>
                        <p>{node.name}</p>
                        <GatsbyImage image={getImage(node)} />
                        
                    </div>
                ))
            }
        </div>
    )


}


export default ImageSlider