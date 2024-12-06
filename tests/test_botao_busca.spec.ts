
import { test, expect } from '@playwright/test';

test('Botão de busca realiza pesquisa', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/');
  await page.fill('input[name="search"]', 'Arte');
  await page.click('.cdx-search-input__end-button');
  await page.waitForSelector('#firstHeading');
  const title = await page.textContent('#firstHeading');
  expect(title).toContain('Arte');
});
