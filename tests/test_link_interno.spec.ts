
import { test, expect } from '@playwright/test';

test('Navegar para o artigo de Isaac Newton', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Sistema_Solar');
  await page.click('a[title="Isaac Newton"]');
  const title = await page.textContent('#firstHeading');
  expect(title).toContain('Isaac Newton');
});
