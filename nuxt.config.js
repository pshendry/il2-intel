
export default {
  head: {
    title: 'IL-2 Intel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  build: {
    extend (config, ctx) {
    }
  }
}
