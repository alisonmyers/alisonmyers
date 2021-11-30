import * as React from 'react'
import Layout from '../components/my-layout'
import getObjects from '../api/get-object'
import Projects from '../components/project-cards'
import { useStaticQuery, graphql } from "gatsby"

const AddingColour = () => {
    const data = useStaticQuery(
      graphql`
        query MoreImages {
          allDataJson(filter: {title: {eq: "My Projects"}, projects: {elemMatch: {category: {eq: "colour"}}}}) {
            nodes {
              title
              projects {
                id
                title
                course
                date
                goals
                description
                connections
                goals_text
                reflection
                links
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder:BLURRED
                    )
                  }
                }
              }
            }
          }
        }

      `
    );

    const projects = data.allDataJson.nodes[0].projects;
    
    return (
      <Layout pageTitle="Adding Colour">

        <p>Adding colour to an outlined sketch can be scary - there's no more erasing, and going back is going to take more time. However, at this stage in an art project, you should have experimented with techniques and tools, and have an idea of where you want the piece to end up.</p>

        <Projects projectData={projects}/>
        
      </Layout>
    )
  }
  
export default AddingColour