const { execSync } = require('child_process')
const crypto = require('crypto')

const emojisList = require('./data/emojis')

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
      // Emojis API
      src: '/api/emojis',
      dest: (req, res) => {
        const count = new URL(
          req.url,
          'http://localhost:8080'
        ).searchParams.get('count')

        const total = emojisList.length

        return res.end(
          JSON.stringify({
            emojis: Array.from({ length: count || 25 }).map(
              () => emojisList[crypto.randomInt(0, total)]
            ),
            count: count,
            total: total,
          })
        )
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
