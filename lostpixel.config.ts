import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
 customShots: {
    currentShotsPath: "./cypress/screenshots",
  },
  generateOnly: true,
  failOnDifference: true,
  lostPixelProjectId: 'cm13pwabt3j0mim93fms5h6m6',
  apiKey: process.env.LOST_PIXEL_API_KEY,
};