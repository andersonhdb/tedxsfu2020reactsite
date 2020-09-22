/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "TEDxSFU 2020",
    titleTemplate: "%s · Unravel ideas",
    description:
      "TEDxSFU is an independently organized TEDx conference with an organizing committee made up of Simon Fraser University alumni and students. We are all volunteers dedicated to the TEDx mantra of “ideas worth spreading”. This year marks our 10th annual conference and we are extremely excited to have you as part of the team! Our TEDxSFU talks are posted on the TEDx Talks YouTube Channel and one of our talks even managed to get over 500,000 views!",
    url: "https://www.tedxsfu.com", // No trailing slash allowed!
    image: "/images/logos/TEDxSFU-logo-white.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@TEDxSFU",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`, 
    'gatsby-image'],
}
