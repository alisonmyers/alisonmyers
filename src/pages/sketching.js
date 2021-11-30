import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
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
    <Layout pageTitle="Sketching and Doodling">

      <p>I began the MET program with a loose idea of what I wanted to learn, and what there was to learn about educational technology. While my technology skills are strong, I knew that I needed some foundational knowledge about education and learning. The selected artifacts that represent my "sketchy(ing)" and "doodling" phase were either projects where I was introduced to a technology for the first time (i.e. VR), or was gaining some knowledge that I knew I was lacking.</p>


      <Projects projectData={getObjects(projects, "id", "ETEC512-1")}/>

      <Projects projectData={getObjects(projects, "id", "ETEC512-2")}/>

      <Projects projectData={getObjects(projects, "id", "ETEC510-1")}/>
      
    </Layout>
  )
}

export default AboutPage