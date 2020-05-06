import SPECS from './assets/data/specs';

export default {
  head: {
    title: 'IL-Tools',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  mode: 'spa',
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/fontawesome.js'],
  buildModules: [],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/pwa'],
  build: {
    extend(config, ctx) {},
  },
  generate: {
    routes: SPECS.map((s) => `/specs/${s.id}`),
  },
  modern: 'client',
};
