require("dotenv").config()

module.exports = {
    siteMetadata: {
      title: `Kaldevi Showroom Virtual`,
      description: `Showroom virtual de la empresa valenciana Kaldevi, con zonas de especialización orientadas a la ortopedia técnica, el bienestar y la movilidad.`,
      author: `@rareastudio`,
      image: `/static/Kaldevi_Icon192.png`,
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
        'gatsby-plugin-breakpoints',
    ]
}