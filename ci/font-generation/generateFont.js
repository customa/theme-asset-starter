const fs = require('fs')
const {
  configFile,
  dumpDirectory,
  fontsDirectory,
} = require('./config.generator.json')
const fontello = require('fontello-cli')

module.exports = () => {
  fs.mkdir(dumpDirectory, () => {
    fontello.install({
      config: configFile,
      css: dumpDirectory,
      font: fontsDirectory,
    })
  })
}
