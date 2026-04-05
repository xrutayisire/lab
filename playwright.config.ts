import { defineConfig } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:4321';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  ...(!process.env.BASE_URL && {
    webServer: {
      command: 'npm run preview',
      url: 'http://localhost:4321',
      reuseExistingServer: !process.env.CI,
    },
  }),
});
