const glob = require('glob')
const path = require('path')
const {
  configFile,
  svgDirectory,
  generatorDefaults,
  fontsDirectory,
} = require('./config.generator.json')
const fs = require('fs')

const generateConfig = () => {
  let id = generatorDefaults.glyphs.startingIdCode
  let code = generatorDefaults.glyphs.startingUnicodeCode

  const config = {
    name: generatorDefaults.name,
    css_prefix_text: generatorDefaults.cssPrefixText,
    css_use_suffix: generatorDefaults.cssUseSuffix,
    hinting: generatorDefaults.hinting,
    units_per_em: generatorDefaults.unitsPerEm,
    ascent: generatorDefaults.ascent,
    glyphs: [],
  }

  if (!fs.existsSync(path.resolve(fontsDirectory)))
    fs.mkdirSync(path.resolve(fontsDirectory))

  return new Promise(resolve => {
    glob(`${svgDirectory}/**/*.svg`, {}, (err, files) => {
      files.forEach(filename => {
        const data = fs.readFileSync(filename)
        const lines = data.toString().split(/\r?\n/)
        const combinedSvgPath = lines
          .map(line => {
            if (line.indexOf(' d=') !== -1) {
              return line.split(' d="')[1].split('"')[0]
            }
          })
          .join(' ')
          .trim()

        const filenameWithoutPath = filename.split('/').pop().split('.')[0]

        config.glyphs.push({
          uid: `${id++}`,
          css: filenameWithoutPath,
          code: code++,
          src: generatorDefaults.glyphs.src,
          selected: generatorDefaults.glyphs.selected,
          svg: {
            path: combinedSvgPath,
            width:
              filenameWithoutPath.indexOf('file') === -1
                ? generatorDefaults.glyphs.width
                : generatorDefaults.glyphs.widthFile,
          },
          search: [filenameWithoutPath],
        })
      })
      fs.writeFileSync(configFile, JSON.stringify(config, null, 2))
      resolve()
    })
  })
}

module.exports = generateConfig
