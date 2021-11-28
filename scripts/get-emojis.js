/**
 * Kudos to
 * https://github.com/EastSun5566/get-some-cool-emojis/blob/master/scripts/gen-emojis.js
 */
const { Readable } = require('stream')
const { createWriteStream } = require('fs')
const { resolve } = require('path')

const emojis = require(`@unicode/unicode-13.0.0/Sequence_Property/RGI_Emoji`)
const targetFile = resolve(__dirname, '..', 'data', 'emojis.js')

Readable.from(`module.exports = ${JSON.stringify(emojis)}`)
  .pipe(createWriteStream(targetFile))
  .on('error', console.error)
  .on('finish', () => console.log(`✨ Successfully generated ${targetFile}`))
