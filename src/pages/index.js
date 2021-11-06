// Step 1: Import React and Link
import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

import CourseTimeLine from '../components/Courses.js'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial I want an image to appear ....</p>
      <StaticImage
        alt="A picture of Vancouver"
        src="../images/vancouver_city.jpg"
      />
      <div>
        <h2>My Courses</h2>
        <CourseTimeLine></CourseTimeLine>
      </div>
      
      <div>
      <a href={`../static/ETEC520_Assignment1.pdf`} target="_blank" rel="noreferrer" id="email">
        <FaNews className="social-icon"></FaNews>
        resume
      </a>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage