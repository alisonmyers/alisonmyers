import * as React from 'react'
import Layout from '../components/my-layout'
import getObjects from '../api/get-object'
import Projects from '../components/project-cards'
import { useStaticQuery, graphql } from "gatsby"

const OutlinePage = () => {
    const data = useStaticQuery(
      graphql`
        query OutlineImages {
          allDataJson(filter: {title: {eq: "My Projects"}}) {
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
      <Layout pageTitle="Outlining">

        <p>In my "outlining" phase, I began to understand what areas really interested me, and could start applying some of the concepts I was learning. I was adding some permanence to the sketches and doodles that I started with. I had a better understanding of my own style, and some practice under my belt creating sketches that I would want to turn into something more.</p>

        <Projects projectData={getObjects(projects, "id", "ETEC520-1")}/>

        <Projects projectData={getObjects(projects, "id", "ETEC524-1")}/>

        <Projects projectData={getObjects(projects, "id", "ETEC530-1")}/>
        
      </Layout>
    )
  }
  
export default OutlinePage