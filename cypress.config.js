const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return {
        baseUrl: "https://flowhigh.sonra.io/visualise-sql",
        env: {
          env: "local",
        },
        testIsolation: true,
        specPattern: "cypress/e2e/*.*",
      }
    },
  },

  viewportHeight: 1200,
  viewportWidth: 1920,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  downloadsFolder: "cypress/downloads",
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false,
  videoCompression: 32,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 50,
});
