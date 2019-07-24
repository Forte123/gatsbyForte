import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {Link} from "gatsby";
import PropTypes from 'prop-types';
import Footerdata from './footer.js';
import "../components/globalnew.css";
//import $ from '../components/fixed-header.js'
// import "../components/fixed-header.js";

function MyFilePage({data, children}) {
  const mydata = data.allWordpressWpApiMenusMenusItems.edges[3].node.items
 console.log(mydata)
  
  var menutitle = mydata.map(function(chil){
    return (
      <li className={chil.object_slug} ><Link to={'/getsby/'+chil.object_slug} dangerouslySetInnerHTML={{ __html: chil.title }} />
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
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
                  <Link to='/'> <img src={node.options.header_logo.source_url} alt={node.options.header_logo.title} /></Link>
                ))}
              </div>
            </div>

            <div className="col-md-9">
              <div className="main-menu">
                <ul style={{ listStyle: `none`, float: `right`, }}>
                    {menutitle}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <Footerdata />
      </div>
  )
}

MyFilePage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
    <StaticQuery
      query={graphql`
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
            allWordpressAcfOptions{
              edges{
                node{
                  options{
                    header_logo{
                      source_url
                      title
                    }
                  }
                }
              }
            }
        }
      `}
      render={data => <MyFilePage data={data} {...props} />}
    />
  )

