module.exports = {
  siteMetadata: {
    siteUrl: "https://academiaswimgym.com.br",
    title: "Academia Swim Gym",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto Condensed',
              variants: ['400']
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Academia SwimGym',
        short_name: 'SwimGym',
        start_url: '/',
        background_color: '#ccc',
        theme_color: '#f46a0b',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      }
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "c2fd781414071df102db0b76d8ca02",
        environment: "main",
      },
    },
  ],
};
