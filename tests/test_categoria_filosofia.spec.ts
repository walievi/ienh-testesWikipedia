import { test, expect } from '@playwright/test';

test('Navegar para categoria "Filosofia"', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/');
  await page.click('a[title="Portal:Filosofia"]');
  const heading = await page.textContent('#firstHeading');
  expect(heading).toBe('Portal:Filosofia');
});