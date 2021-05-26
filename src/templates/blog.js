import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "./blog.css"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const mainBg = {
    backgroundImage: 'url("../images/painter.png")',
  }

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h6>{frontmatter.date}</h6>
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <Link to="/blog"><button className="msButton">Back to Posts</button></Link>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`