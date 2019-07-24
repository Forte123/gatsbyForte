import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout2";

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        {/* <div> if ({currentPage.acf.tester} != 'null') {
          <p>{currentPage.acf.tester}</p>
        } else {
          
        }  </div> */}
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
// query($id: String!) {
//   wordpressPage(id: { eq: $id }) {
//     title
//     content
//     date(formatString: "MMMM DD, YYYY")
//     acf{
//       tester
//     }
//   }
// }