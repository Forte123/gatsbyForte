import React from 'react';
import { graphql } from 'gatsby';
import {Link} from "gatsby";
import PropTypes from 'prop-types';
import image from '../images/forte.png'
import "../components/layout2.css";
  
function MyFilePage({data, children}) {
  const mydata = data.allWordpressWpApiMenusMenusItems.edges[1].node.items  
  var menutitle = mydata.map(function(chil){
    return (
      <li style={{ display: `inline-block`, marginRight: `1rem`, }} ><Link to={'/getsby/'+chil.object_slug} dangerouslySetInnerHTML={{ __html: chil.title }} />
      <ul>
      {chil.wordpress_children && chil.wordpress_children.map((subitem) =>
            <li>
                <Link to={'/getsby/'+subitem.object_slug}>
                    {subitem.title}
                </Link>
            </li>
        )}
      </ul>
      </li>
    );
  })

  return (
      <div style={{
          margin: `0 auto`,
          maxWidth: 1170,
          padding: `0 1rem`,
      }}>

          <header style={{marginBottom: `1.5rem`}}>
          <Link to='/'> <img src={image} alt="Logo" /></Link>
              <ul style={{ listStyle: `none`, float: `right`, }}>
                  {menutitle}
              </ul>
              <h3 style={{color:`orange`}}>Forte Site</h3>
          </header>
          {children}
      </div>
  )
}

MyFilePage.propTypes = {
  children: PropTypes.node.isRequired,
}
export const query = graphql`
  query {
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          name
          slug
          count
          items {
            order
            title
            object_slug
            wordpress_children{
                title
                object_slug
              }
          }
        }
      }
    }
  }
`

export default MyFilePage;