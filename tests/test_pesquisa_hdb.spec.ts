
import { test, expect } from '@playwright/test';

test('Pesquisa por "História do Brasil"', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/');
  await page.fill('input[name="search"]', 'História do Brasil');
  await page.press('input[name="search"]', 'Enter');
  await page.waitForSelector('#firstHeading');
  const title = await page.textContent('#firstHeading');
  expect(title).toContain('História do Brasil');
});
