import React from "react"
import { graphql } from "gatsby";
import {Link} from "gatsby";
import Layout from "../components/layout2";
import SEO from "../components/seo";
import { Helmet } from "react-helmet";
import $ from "jquery";
import Slider from "react-slick";
import Tabs from "../components/tab";
// import "./slick-theme.min.css";
// import "./slick-carousel/slick/slick.css";
require('./slick.min.css');
//require('./slick-theme.min.css');

$(document).on("scroll", function(){
  if ($(document).scrollTop() > 100){
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }

  
});
  
$(document).ready(function(){   
    //var windowWidth = $(window).width();

    $(".client-gallery-list li a").on("click" , function(e) {
      e.preventDefault();
      var thisData = $(this).data("gallery");
      $(this).parents("li").siblings().removeClass("active");
      $(this).parents("li").addClass("active");
      if( thisData === "all" ) {
        $(".client-gallery-content li").fadeIn();
      } else {
        $(".client-gallery-content li").hide();
        $(".client-gallery-content li.gallery-"+thisData).fadeIn();
      }				
    });
    
    //var a = 0;
    // $(window).scroll(function() {
    //   var position = $('.counter-row').offset();
    //   var oTop = position.top - window.innerHeight;
    //   if (a === 0 && $(window).scrollTop() > oTop) {
    //     $('.counter-value').each(function() {
    //       var $this = $(this),
    //         countTo = $this.attr('data-count');
    //       $({
    //         countNum: $this.text()
    //       }).animate({
    //           countNum: countTo
    //         },

    //         {

    //           duration: 2000,
    //           easing: 'swing',
    //           step: function() {
    //             $this.text(Math.floor(this.countNum));
    //           },
    //           complete: function() {
    //             $this.text(this.countNum);
    //           }

    //         });
    //     });
    //     a = 1;
    //   }

    //   var sTop = $(window).scrollTop();
    // var winH = $(window).outerHeight();
  
    // if( sTop + winH > ($(".discuss-section").offset().top + $(".discuss-section").outerHeight())  ) {
    //   $(".discuss__aeroplane").addClass("discuss__aeroplane--show");
    // } else {
    //   $(".discuss__aeroplane").removeClass("discuss__aeroplane--show");
    // }
    
    // })
    
    $('.banner, .right-top, .left-bottom, .right-bottom').mousemove(function(event){
        var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
        var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
        $('.right-top').css('margin-right',moveX + 'px');
        $('.right-top').css('margin-top',moveY + 'px');

        $('.left-bottom').css('margin-left',moveX + 'px');
        $('.left-bottom').css('margin-bottom',moveY + 'px');

        $('.right-bottom').css('margin-right',moveX + 'px');
        $('.right-bottom').css('margin-bottom',moveY + 'px');
    });

    $('ul.nav-tabs li a').click(function(e){
      e.preventDefault();
      var tab_id = $(this).attr('id');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

    if( $(".specialised-section").length > 0 ){
      skillImages();
    }
 

    function skillImages() {
      if( $(window).scrollTop() + $(window).outerHeight() + 100 > $(".specialised-section").offset().top  ) {
          $(".special-icons").each(function (index) {
            var $this = $(this);
            setTimeout(function () {
                $this.addClass("animation");
            }, 300 * index );
        });
      } else {
        $(".special-icons").removeClass("animation");
      }
    }

});

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
};

const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Helmet>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <meta charSet="utf-8" />
      <title>Web Forte Technologirs Pvt. Ltd.</title>
    </Helmet>

    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
            <div className="banner-content">
              <h1 className="banner-heading heading-white" dangerouslySetInnerHTML={{ __html: node.options.home_headingg }} />
              <p className="banner-description">
                {node.options.home_subheadingg}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
      {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
        <div>
          {node.options.planets_images && node.options.planets_images.map((subitem) =>
             <img src={subitem.planets_images_data.source_url} className={subitem.planets_images_data.title} alt="asd" /> 
        )}
        {/* <img src={node.options.planets_images.source_url} className="right-top" alt="asd" />
        <img src="ds" alt="ds" className="left-bottom" />
        <img src="dsf" alt="eds" className="right-bottom" /> */}
        </div>
      ))}
</div>
    {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
      <div className="about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <div className="about-pic">
              <img src={node.options.about_image.source_url} alt="About"/>
              </div>
            </div>
            <div className="col-md-3">
              <div className="about-content">
                <div className="about-content-inner">
                  <h3 className="heading-dark sub-heading" dangerouslySetInnerHTML={{ __html: node.options.about_heading }} />
                  <p dangerouslySetInnerHTML={{ __html: node.options.about_content }} />
                  <Link className="read-more" to={node.options.cta_link}>{node.options.cta_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    <Tabs>
      One
      <span>
        Well here's a nested Tabs element.
      </span>
      Two
      <span>Two thing</span>
      Three
      <span>Three thing</span>
    </Tabs>
{data.allWordpressAcfOptions.edges.map(({ node }, index) => (
  <div className="service-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h5 class="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.what_we_do_home_heading }} />
          <h3 class="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.what_we_do_home_subheading }} />

          <ul class="nav nav-tabs" id="myTab" role="tablist">
          <Tabs>
            {node.options.what_we_do && node.options.what_we_do.map((subitem) =>
            <div>
                 {subitem.tab_heading}
              <span>asds eas </span>
            </div>
             
           
              // <li class="nav-item">
              //   <Link class="nav-link active" id={ subitem.what_we_do_id } data-toggle="tab" to= {"#"+subitem.what_we_do_id} role="tab" aria-controls={subitem.what_we_do_id} aria-selected="false">
              //     <img src={subitem.what_we_do_icon.source_url} alt={subitem.what_we_do_icon.slug} />
              //       {subitem.tab_heading}
              //   </Link>
              // </li>
            )}
             </Tabs>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="tab-content-service">
      <div class="container-fluid"> 
        <div class="row bg-image">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="tab-content">
                    {node.options.what_we_do && node.options.what_we_do.map((subitem) =>
                      <div class="tab-pane" id={subitem.what_we_do_id} role="tabpanel" aria-labelledby={subitem.what_we_do_id+"-tab"}>
                        <h5 class="sub-heading" dangerouslySetInnerHTML={{ __html: subitem.what_we_do_heading }} />
                        <h3 class="sub-heading" dangerouslySetInnerHTML={{ __html: subitem.what_we_do_subheading }} />
                        <p dangerouslySetInnerHTML={{ __html: subitem.what_we_do_content }} />
                        <Link to={subitem.what_we_do_cta_url} className="read-more">{subitem.what_we_do_cta_text}</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
          
{data.allWordpressAcfOptions.edges.map(({ node }, index) => (
<div className="specialised-section">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="spec-section">
                        <h5 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.we_are_specialized_subheeading }} />
                        <h3 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.we_are_specialized_heading }} />

                        <p dangerouslySetInnerHTML={{ __html: node.options.we_are_specialized_content }} />
                        <Link to={node.options.we_are_specialized_cta_link} className="read-more">{node.options.we_are_specialized_cta_text}</Link>
                    </div>
                </div>
        
          <div className="col-md">
            <img src={node.options.we_are_specialized_image.source_url} alt="vgvhj" />
          </div>
            </div>
        </div>
    </div>
  ))}

<div className="our-clients">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				{data.allWordpressAcfOptions.edges.map(({ node }, index) => (
					<div className="spec-section">
						<h5 className="sub-heading white" dangerouslySetInnerHTML={{ __html: node.options.success_stories_heading }} />
						<h3 className="sub-heading white" dangerouslySetInnerHTML={{ __html: node.options.success_stories_subheading }} />
					</div>
				))}
			</div>
		</div>
	</div>

	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12">
				<div className="client-gallery">
					<ul className="client-gallery-list">

						<li className="active"><Link to="#" data-gallery="all">all</Link></li>
						{data.allWordpressWpSuccessStoriesCateories.edges.map(({ node }, index) => (
						<li><Link to="#" data-gallery={ node.wordpress_id }>{ node.name }</Link></li>
						))}
					</ul>

					<ul className="client-gallery-content">
						{data.allWordpressWpSuccessStories.edges.map(({ node }, index) => (
							<li className={ "gallery-"+node.success_stories_cateories }>
								<div>
									<img src={ node.featured_media.source_url } alt={ node.featured_media.slug } />
									<h6>{ node.title }</h6>
									<span>{ node.success_stories_cateories }</span>
									<Link to="#" className="read-more"><img src="http://localhost/getsby/wp-content/uploads/2019/05/right-arrow.png" alt="right-arrow" /></Link>
								</div>
							</li>
						))}
					</ul>

					<Link to="#" className="learn-more">learn more &nbsp;<i className="fa fa-refresh"></i></Link>
				</div>
			</div>
		</div>
	</div>
</div>

{data.allWordpressAcfOptions.edges.map(({ node }, index) => (
  <div className="container counter-outer">
      <div className="row">
        <div className="col-md-12">
          <h5 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.clients_data_heading }} />
          <h3 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.clients_data_subheading }} />
        </div>
      </div>
      <div className="row counter-row">
      {node.options.clients_data && node.options.clients_data.map((subitem) =>
        <div className="col-md-3">
          <div className="counter">
            <span className="number"><span className="counter-value" data-count={subitem.clients_count}>0</span>+</span>
            <span className="name">{subitem.clients_heading}</span>
          </div>
        </div>
        )}
      </div>
    </div>
    ))}

  {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
    <div className="testimonial-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <h5 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.testimonials_heading }} />
            <h3 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.testimonials_subheading }} />
            <p dangerouslySetInnerHTML={{ __html: node.options.testimonials_content }} />
            <Link to={ node.options.testimonials_button_link } className="read-more">{ node.options.testimonials_button_text }</Link>
          </div>
          <div className="col-md-6">
            <div id="testimonial-slider" className="owl-carousel owl-theme owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage" style={{ left: `-976px`, width: `3418px` }} >
                      <Slider { ...settings }>
                      {node.options.testimonials_repeater && node.options.testimonials_repeater.map((subitem) =>
                          <div className="owl-item" style={{ width: `448.25px`, marginRight: `40px` }}>
                            <div className="testimonial">
                                  <p className="description" dangerouslySetInnerHTML={{ __html: subitem.testimonials_content }} />
                                  <div className="pic">
                                    <img src={ subitem.testimonials_client_image.source_url } alt="edce" />
                                  </div>
                                  <div className="inner-heading">
                                    <h3 className="title" dangerouslySetInnerHTML={{ __html: subitem.client_name_testimonials }} />
                                    <span className="post">{ subitem.client_deasignation_testimonials }</span>
                                  </div>
                              </div>
                          </div>
                        )}
                        </Slider>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  ))}

{data.allWordpressAcfOptions.edges.map(({ node }, index) => (
  <div className="work-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-heading">
            <h5 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.why_work_with_us_heading }} />
            <h3 className="sub-heading" dangerouslySetInnerHTML={{ __html: node.options.why_work_with_us_subheading }} />
          </div>
        </div>
      </div>

      <div className="row work-main-first">
      {node.options.why_work_with_us_data && node.options.why_work_with_us_data.map((subitem) =>
        <div className="col-lg-4 col-md-6">
          <div className="work-content">
            <span className="pic"><img src={ subitem.why_work_with_us_icon.source_url } alt={ subitem.why_work_with_us_icon.title } /></span>
            <div className="work-desc">
              <h5 dangerouslySetInnerHTML={{ __html: subitem.why_work_with_us_data_heading }} />
              <p dangerouslySetInnerHTML={{ __html: subitem.why_work_with_us_data_content }} />
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  </div>
  ))}

  {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
    <div className="container-fluid footer-service-main">
      <div className="row">
      {node.options.starting_with_an_idea_data && node.options.starting_with_an_idea_data.map((subitem) =>
        <div className="col-md-3">
          <div className="footer-service">
            <span className="icon">
              <img src={ subitem.starting_with_an_idea_icon.source_url } alt={ subitem.starting_with_an_idea_icon.title } />
            </span>
            <div className="content">
              <h5 dangerouslySetInnerHTML={{ __html: subitem.starting_with_an_idea_heading }} />
              <p dangerouslySetInnerHTML={{ __html: subitem.starting_with_an_idea_content }} />
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  ))}

  {data.allWordpressAcfOptions.edges.map(({ node }, index) => (
    <div className="discuss-section">
      <div className="discuss__wave-2" style={{ backgroundImage: `url(http://localhost/getsby/wp-content/uploads/2019/06/discuss__wave-2.png)` }}  ></div>
      <div className="discuss__wave-3" style={{ background: `url(http://localhost/getsby/wp-content/uploads/2019/06/discuss__wave-3.png)`  }} ></div>
      <div className="discuss__aeroplane" style={{ background: `url(http://localhost/getsby/wp-content/uploads/2019/06/discuss__aeroplane.png)` }} ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="sub-heading white" dangerouslySetInnerHTML={{ __html: node.options.discuss_section_heading }} />
            <h3 className="sub-heading white" dangerouslySetInnerHTML={{ __html: node.options.discuss_section_subheading }} />
            <a href={ node.options.discuss_section_cta_link } className="request-btn">{ node.options.discuss_section_button_text }</a>
          </div>
        </div>
      </div>
    </div>
  ))}
      {/* <h2>Pages</h2>
      {data.allWordpressPage.edges.map(({ node }, index) => (
        <p><Link to={"/getsby/"+node.slug}>{node.title}</Link></p>
      ))} */}
  </Layout>
)

export default IndexPage
export const query = graphql`
query {
  allWordpressAcfOptions {
    edges {
      node{
        options{
          discuss_section_heading
          discuss_section_subheading
          discuss_section_button_text
          discuss_section_cta_link
          discuss_section_rocket_image{
            source_url
            slug
          }
          discuss_section_wave_image_1{
            source_url
            slug
          }
          discuss_section_wave_image_2{
            source_url
            slug
          }

          success_stories_heading
          success_stories_subheading
          home_headingg
          home_subheadingg
          about_heading
          about_content
          cta_link
          cta_text
          we_are_specialized_subheeading
          we_are_specialized_heading
          we_are_specialized_image {
            source_url
          }
          why_work_with_us_heading
          why_work_with_us_subheading
          why_work_with_us_data{
            why_work_with_us_data_heading
              why_work_with_us_icon{
                source_url
                title
              }
            why_work_with_us_data_content
          }
          starting_with_an_idea_data{
            starting_with_an_idea_heading
            starting_with_an_idea_content
            starting_with_an_idea_icon{
              source_url
              title
            }
          }
          testimonials_heading
          testimonials_subheading
          testimonials_content
          testimonials_button_text
          testimonials_button_link
          testimonials_repeater{
            testimonials_client_image {
              source_url
            }
            testimonials_content
            client_name_testimonials
            client_deasignation_testimonials
          }
          we_are_specialized_content
          we_are_specialized_cta_text
          we_are_specialized_cta_link
          planets_images{
            planets_images_data{
              source_url
              title
            }
          }
          clients_data_heading
          clients_data_subheading
          clients_data{
            clients_count
            clients_heading
          }
          header_banner {
            source_url
          }
          about_image {
            source_url
          }
          what_we_do_home_heading
          what_we_do_home_subheading
          what_we_do{
            what_we_do_icon {
              source_url
              slug
            }
            tab_heading
            what_we_do_id
            what_we_do_heading
            what_we_do_subheading
            what_we_do_content
            what_we_do_cta_text
            what_we_do_cta_url
          }
        }
      }
    }
  }
  allWordpressWpSuccessStoriesCateories{
    edges{
      node{
        
        wordpress_id
        name
      }
    }
  }
  allWordpressWpSuccessStories{
    edges{
      node{
        title
        featured_media {
          source_url
        }
        slug
        success_stories_cateories
      }
    }
  }
  allWordpressPage {
    edges {
      node {
        id
        title
        content
        excerpt
        date
        modified
        slug
        status
      }
    }
  }
}
`
// export const query = graphql`
// query {
//     allWordpressPage {
//         edges {
//           node {
//             id
//             title
//             content
//             excerpt
//             date
//             modified
//             slug
//             status
//           }
//         }
//       }
//   }
// `