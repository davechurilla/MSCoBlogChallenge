/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          padding: `0 1.0rem 1.45rem 1.5rem`,
        }}
      >
        <div className="row">
          <div className="column"
          style={{ marginBottom: `10%`, }}>
            <main>{children}</main>
          </div>
          <div className="column page-right"></div>
        </div>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
        </footer>
      </div>
      <div className="mobilebg"></div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
