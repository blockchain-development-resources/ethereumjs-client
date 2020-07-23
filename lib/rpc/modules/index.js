const moduleList = ['eth', 'web3', 'net', 'admin']

moduleList.forEach(mod => {
  module.exports[mod] = require(`./${mod}`)
})

module.exports.list = moduleList
