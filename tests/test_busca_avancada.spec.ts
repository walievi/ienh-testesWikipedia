
import { test, expect } from '@playwright/test';

test('Busca avançada funciona corretamente', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Especial:Busca');
  await page.fill('#ooui-php-1', 'Filosofia');
  await page.click('button[type="submit"]');
  await page.waitForSelector('.searchresults');
  const results = await page.isVisible('.mw-search-result');
  expect(results).toBeTruthy();
});
