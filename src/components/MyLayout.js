import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="container">

      <div className="top-banner">
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header>
          <h2 className="site-title">{data.site.siteMetadata.title}</h2>
          <h3 className="site-description">{data.site.siteMetadata.description}</h3>
        </header>
      
        <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/projects" className="nav-link-text">
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      </div>
      
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout