const publisher = require('@pact-foundation/pact-node')
const path = require('path')
const pkg = require('../../package.json')

const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, 'contracts')],
  pactBroker: process.env.PACT_BROKER_URL || 'https://limitless-hamlet-75386.herokuapp.com/',
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME || 'admin',
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD || 'pacty123',
  consumerVersion: `${pkg.version}-${process.env.GIT_COMMIT || process.env.CIRCLE_SHA1 || Date.now()}`,
  tags: ['master']
}

publisher.publishPacts(opts)