const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cqgim1",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
