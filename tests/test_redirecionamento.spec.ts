
import { test, expect } from '@playwright/test';

test('Redirecionamento para termo correto', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/');
  await page.fill('input[name="search"]', 'Brasil');
  await page.press('input[name="search"]', 'Enter');
  const title = await page.textContent('#firstHeading');
  expect(title).toContain('Brasil');
});
