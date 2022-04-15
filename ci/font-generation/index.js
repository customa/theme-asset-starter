const generateFont = require('./generateFont')
const generateConfig = require('./generateConfig')

generateConfig().then(() => generateFont())
