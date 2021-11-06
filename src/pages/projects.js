import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      <p>To go here.</p>

      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default ProjectsPage