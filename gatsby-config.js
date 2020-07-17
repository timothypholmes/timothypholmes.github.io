module.exports = {
  siteMetadata: {
    title: `Timothy Holmes`,
    description: `A personal portfolio deployed to gh-pages.`,
    author: `@TimothyHolmes`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
      name:'page2',
      link:'/page-2'
      }
    ]
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/src/pages`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/me.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
