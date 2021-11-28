const { execSync } = require('child_process')

module.exports = {
  routes: [
    {
      // Proxy to poem generator from
      // https://boredhumans.com/poetry_generator.php
      src: '/api/poem',
      dest: (req, res) => {
        const resp =
          execSync(`curl -X POST 'https://boredhumans.com/api_poetry.php' \
        -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
        --data-raw 'lyrics1=true'
        `)

        res.setHeader('content-type', 'application/json')

        return res.end(resp.toString('utf-8'))
      },
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
