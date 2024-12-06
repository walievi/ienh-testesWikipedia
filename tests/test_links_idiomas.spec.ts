
import { test, expect } from '@playwright/test';

test('Links de idiomas estão visíveis', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Portal:Arte');
  await page.locator('#p-lang-btn').click();
  const englishLink = await page.locator('.uls-language-block a[lang="en"]').first();
  await englishLink.click();

  const title = await page.textContent('.mw-page-title-main');
  expect(title).toBe('The arts');
});
