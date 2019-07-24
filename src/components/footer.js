import React from "react"
import { StaticQuery, graphql } from "gatsby";
import {Link} from "gatsby";

function MyFilePage({data}) {
    const mydata = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
    //console.log(mydata)
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
<footer className="footer" id="footer">
    <div className="footer-top-nav">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
                    <div className="pic">
                        <Link to="/"><img src={node.options.footer_logo.source_url} alt="Web Forte" /></Link>
                    </div>
                ))} 
                </div>

                <div className="col-md-9">
                    <ul className="footer-menu">
                        {menutitle}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-widget footer-menu">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3>Sector Expertise</h3>
                    <ul className="inner">
                        <li><Link to="#">Content Management System</Link></li>
                        <li><Link to="#">Custom Website Design</Link></li>
                        <li><Link to="#">Offshore Development</Link></li>
                        <li><Link to="#">Web Portal Development</Link></li>
                        <li><Link to="#">Joomla Development</Link></li>
                        <li><Link to="#">PHP/MYSQL Development</Link></li>
                        <li><Link to="#">Web 2.0 Development</Link></li>
                        <li><Link to="#">Website Re-Design</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Industrial Training</h3>
                    <ul className="inner">
                            <li><Link to="#">PHP/MYSQL with Wordpress CMS</Link></li>
                            <li><Link to="#">AngularJS, ReactJs or VueJS</Link></li>
                            <li><Link to="#">HTML5, CSS3 with SASS</Link></li>
                            <li><Link to="#">Joomla, Magento and Wordpress</Link></li>
                            <li><Link to="#">Adobe Photoshop, Illustrator, XD, Sketch</Link></li>
                            <li><Link to="#">Java</Link></li>
                            <li><Link to="#">iOS with Swift 5</Link></li>
                            <li><Link to="#">Android with Kotlin</Link></li>
                            <li><Link to="#">SalesForce Administration and Development</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Other Important Services</h3>
                    <ul class="inner">
                        <li><Link to="#">Website Optimization</Link></li>
                        <li><Link to="#">Migration Services</Link></li>
                        <li><Link to="#">Domain Registration</Link></li>
                        <li><Link to="#">Web hosting solutions</Link></li>
                        <li><Link to="#">DevOps with Docker, Kubernetes</Link></li>
                        <li><Link to="#">AWS Suite</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Design Studio</h3>
                    <ul className="inner">
                        <li><Link to="#">Logo and Corporate Identity</Link></li>
                        <li><Link to="#">Graphic Designing</Link></li>
                        <li><Link to="#">Landing page designing</Link></li>
                        <li><Link to="#">Newsletter Designing</Link></li>
                        <li><Link to="#">Website template designing</Link></li>
                        <li><Link to="#">Explainer videos</Link></li>
                        <li><Link to="#">Banner design</Link></li>
                        <li><Link to="#">User Experience design</Link></li>
                        <li><Link to="#">Mobile UI slicing and designing</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Development Studio</h3>
                    <ul className="inner">
                        <li><Link to="#">Wordpress Development</Link></li>
                        <li><Link to="#">SalesForce Component Development</Link></li>
                        <li><Link to="#">Mobile Application Development</Link></li>
                        <li><Link to="#">E-commerce Store Development</Link></li>
                        <li><Link to="#">Rails Backend Development</Link></li>
                        <li><Link to="#">Rest API Development</Link></li>
                        <li><Link to="#">Laravel Development</Link></li>
                        <li><Link to="#">AngularJS Development</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Web Marketing</h3>
                    <ul className="inner">
                        <li><Link to="#">Search Engine Optimization</Link></li>
                        <li><Link to="#">Social Media Marketing</Link></li>
                        <li><Link to="#">Google Analytics and Adwords</Link></li>
                        <li><Link to="#">Landing pages</Link></li>
                        <li><Link to="#">Inbound Marketing</Link></li>
                        <li><Link to="#">Email Marketing</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
                        <p dangerouslySetInnerHTML={{ __html: node.options.copyright_text }} />
                    ))}
                </div>
                <div className="col-md-3">
                {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
                    <ul className="social-icon">
                        {node.options.social_icons && node.options.social_icons.map((subitem) =>
                            <li>
                                <Link to={subitem.social_share_link}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            </li> 
                        )}
                    </ul>
                ))} 
            </div>
            </div>
        </div>
    </div>
</footer>
    )
}


export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressAcfOptions{
                edges{
                  node{
                    options{
                      footer_logo{
                        source_url
                      }
                      social_icons{
                        social_share_link
                      }
                      copyright_text
                    }
                  }
                }
            }
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
      `}
      render={data => <MyFilePage data={data} {...props} />}
    />
  )
// export const query = graphql`
// query {
//     allWordpressAcfOptions{
//         edges{
//           node{
//             options{
//               footer_logo{
//                 source_url
//               }
//               social_icons{
//                 social_share_link
//               }
//               copyright_text
//             }
//           }
//         }
//     }
// }
// `