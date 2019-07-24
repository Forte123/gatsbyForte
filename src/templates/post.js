import React, { Component } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout2";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <img src={post.featured_media.source_url} alt="Featured"/>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <h2>Facebook: {post.acf.facebook} </h2>
        <h2>Twitter: {post.acf.twitter} </h2>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
query($id: String!) {
  wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media{
        source_url
      }
      acf{
        facebook
        twitter
      }
    }
  }
`