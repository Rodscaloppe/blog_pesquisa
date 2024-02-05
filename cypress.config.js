const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1440,
  viewportHeight: 881,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://blogdoagi.com.br',
  },
})
