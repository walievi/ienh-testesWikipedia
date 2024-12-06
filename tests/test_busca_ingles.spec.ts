
import { test, expect } from '@playwright/test';

test('Pesquisar em inglês', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/');
  await page.fill('input[name="search"]', 'Physics');
  await page.press('input[name="search"]', 'Enter');
  await page.waitForSelector('#firstHeading');
  const title = await page.textContent('#firstHeading');
  expect(title).toContain('Physics');
});
