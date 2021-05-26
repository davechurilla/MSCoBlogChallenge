import React from 'react'
import Layout from "../components/layout"
import BlogRoll from '../components/BlogRoll'

class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndexPage