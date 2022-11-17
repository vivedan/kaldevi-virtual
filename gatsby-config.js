require("dotenv").config()

const myCustomQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 926px)',
  md: '(max-width: 1024px)',
  l: '(max-width: 1536px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
    siteMetadata: {
      title: `Kaldevi Showroom Virtual`,
      description: `Showroom virtual de la empresa valenciana Kaldevi, con zonas de especialización orientadas a la ortopedia técnica, el bienestar y la movilidad.`,
      author: `@rareastudio`,
      image: `/Kaldevi_Icon192.png`,
      siteUrl: `https://kaldevivirtualmain.gatsbyjs.io/`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
              typekit: {
                id: process.env.TYPEKIT_ID,
              },
            },
          },
          {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: myCustomQueries,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Kaldevi Showroom Virtual`,
              short_name: `Kaldevi`,
              start_url: `/`,
              background_color: `#416383`,
              theme_color: `#416383`,
              display: `fullscreen`,
              orientation: `landscape`,
              icons: [
                {
                  src: `Kaldevi_Icon192.png`,
                  sizes: `192x192`,
                  type: `image/png`,
                },
              ],
              description: `Showroom virtual de la empresa valenciana Kaldevi, con zonas de especialización orientadas a la ortopedia técnica, el bienestar y la movilidad.`,
            },
          },
          {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
              googleAnalytics: {
                trackingId: 'G-QLLHEC90GG',
                cookieName: "gatsby-gdpr-google-analytics",
                // Setting this parameter is optional
                anonymize: true
              },
              // Defines the environments where the tracking should be available  - default is ["production"]
              environments: ['production', 'development']
            },
          },
    ]
}