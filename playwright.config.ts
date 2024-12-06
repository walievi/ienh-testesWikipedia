
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.wikipedia.org/',
    browserName: 'chromium',
    headless: true,
  },
});
