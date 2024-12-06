
import { test, expect } from '@playwright/test';

test('Página inicial carrega corretamente', async ({ page }) => {
  await page.goto('https://wikipedia.org/');
  const logoVisible = await page.isVisible('.central-featured-logo');
  expect(logoVisible).toBeTruthy();
});
