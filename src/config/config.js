let env = process.env.NODE_ENV || 'production'

if (env !== 'development' && env !== 'production') {
  env = 'production'
}

const config = require(`./${env}/config.js`)

module.exports = config
