module.exports = {
  siteMetadata: {
    title: 'Rohit Nagar',
    description:
      'Rohit Nagar is Backend Software Engineer focused on DRF, Scalable and Robust System.',
    siteUrl: 'https://github.com/nagar2817', // No trailing slash allowed!
    image: '/og.jpeg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@0xRohit_1',
  },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sitemap`,
    ]
}