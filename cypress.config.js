const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path');

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {

        // Extract the filename from the original path
        const filename = path.basename(details.path);

        // Define the new path at the top level of the screenshots folder
        const newPath = path.join(config.screenshotsFolder, filename);

        // eslint-disable-next-line no-undef
        return new Promise((resolve, reject) => {
          // Rename (move) the file to the new path
          fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err)

            // Resolve with the new path for accurate results
            resolve({ path: newPath });
          });
        });
      });
    },
  },
})