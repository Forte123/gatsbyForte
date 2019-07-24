import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout2";
import {Link} from "gatsby"

const Blog = ({data}) =>(
    <Layout>
        {data.allWordpressPost.edges.map(({ node }) => (
            <div>
                <Link to={"/getsby/"+node.slug}><img src={node.featured_media.source_url} alt="Featured" /></Link>
                <h1><Link to={"/getsby/"+node.slug}>{node.title}</Link></h1>
                <p><span>{node.date}</span></p>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </Layout>
)

export default Blog

export const query = graphql`
query {
    allWordpressPost {
      edges {
        node {
          slug
          title
          excerpt
          date
          featured_media{
            source_url
          }
        }
      }
    }
  }
`