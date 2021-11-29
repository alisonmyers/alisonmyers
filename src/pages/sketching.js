import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
//import ProjectData from '../data/myprojects.json'
import { useStaticQuery, graphql } from "gatsby"
import getObjects from '../api/get-object'


const AboutPage = () => {

  const data = useStaticQuery(
    graphql`
      query ProjectImages {
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
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }

    `
  );

  const projects = data.allDataJson.nodes[0].projects;
  console.log("data:")
  console.log(data.allDataJson.nodes[0].projects)
  //const projects = ProjectData.projects; 

  return (
    <Layout pageTitle="Sketching">

      <p>Some text here </p>
      <Projects projectData={getObjects(projects, "id", "ETEC512-1")}/>

      <p>Some text here </p>

      <Projects projectData={getObjects(projects, "id", "ETEC512-2")}/>
      
    </Layout>
  )
}

export default AboutPage