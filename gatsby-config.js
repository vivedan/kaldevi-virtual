require("dotenv").config()

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
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Kaldevi Showroom Virtual`,
              short_name: `Kaldevi`,
              start_url: `/`,
              background_color: `#416383`,
              theme_color: `#416383`,
              display: `fullscreen`,
              icons: [
                {
                  src: `src/images/Kaldevi_Icon192.png`,
                  sizes: `192x192`,
                  type: `image/png`,
                },
                {
                  src: `src/images/Kaldevi_Icon512.png`,
                  sizes: `512x512`,
                  type: `image/png`,
                },
              ],
              description: `Showroom virtual de la empresa valenciana Kaldevi, con zonas de especialización orientadas a la ortopedia técnica, el bienestar y la movilidad.`,
            },
          },
          {
            resolve: 'gatsby-plugin-offline',
            options: {
               workboxConfig: {
                  globPatterns: ['**/*']
               }
            }
         },
        'gatsby-plugin-breakpoints',
    ]
}