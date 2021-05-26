import React from 'react'
import Layout from "../components/layout"
import BlogRoll from '../components/BlogRoll'
import { TransitionGroup, CSSTransition } from "react-transition-group";

class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Blog msco.</h1>
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