module.exports = {
  siteMetadata: {
    title: `Web Forte`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Ashish`,
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: "gatsby-source-wordpress",
        options: {
          baseUrl: "localhost/getsby",
          protocol: "http",
          useACF: true,
          acfOptionPageIds: ["home"],
        }
      },
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: `forte-disqus`
        }
      },
      {
        resolve: 'gatsby-plugin-crisp-chat',
        options: {
          websiteId: '1cd1be19-42cf-4bf7-9362-2e290a6eabb3',
          enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
          defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Forte Technologies Pvt. Ltd`,
        short_name: `Web Forte`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToconfigModule: `src/utils/typography`,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
