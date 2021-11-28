const api = require('./api')

module.exports = {
  routes: [
    {
      src: '/api/poem',
      dest: api.poems,
    },
    {
      src: '/api/emojis',
      dest: api.emojisList,
    },
    {
      src: '/api/emojis/total',
      dest: api.emojisTotal,
    },
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  plugins: ['@snowpack/plugin-postcss'],
}
