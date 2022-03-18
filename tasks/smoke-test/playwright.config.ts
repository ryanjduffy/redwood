import { devices, PlaywrightTestConfig } from '@playwright/test'
import { devices as replayDevices } from '@replayio/playwright'

// See https://playwright.dev/docs/test-configuration#global-configuration
const config: PlaywrightTestConfig = {
  timeout: 60_000,
  // Leaving this here to make debugging easier, by uncommenting
  // use: {
  //   launchOptions: {
  //     slowMo: 500,
  //     headless: false,
  //   },
  // },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'replay-firefox',
      use: {
        ...replayDevices['Replay Firefox'],
      },
    },
    {
      name: 'replay-chromium',
      use: {
        ...replayDevices['Replay Chromium'],
      },
    },
  ],
}

export default config
