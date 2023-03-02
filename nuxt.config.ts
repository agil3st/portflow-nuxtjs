// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
    ],
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        title: 'Portflow',
        meta: [
          {name: 'description', content: 'Portflow. a simple portfolio web template powered by NuxtJS'}
        ],
        link: [
          { rel:"stylesheet", type:"text/css", href:'https://cdn.lineicons.com/4.0/lineicons.css' }
        ],
      },
    },
  })
  