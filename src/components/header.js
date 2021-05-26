import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      color: `#1D1FDD`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#1D1FDD`,
            textDecoration: `none`,
          }}
        >
              <StaticImage
              src="../images/ms-logo.png"
              width={108}
              quality={95}
              placeholder= {`transparent`}
              breakpoints= {[750, 1080, 1366, 1920]}
              backgroundColor= {`transparent`}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Matter Supply logo"
              style={{ marginBottom: 0 }}
            />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
