import { test, expect } from '@playwright/test';

test('Verificar links para arquivos multimídia', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Filosofia');
  const multimediaLinks = await page.locator('a[href*=".jpg"], a[href*=".png"], a[href*=".svg"]').all();
  expect(multimediaLinks.length).toBeGreaterThan(0);
  for (const link of multimediaLinks) {
    const href = await link.getAttribute('href');
    expect(href).toMatch(/\.(jpg|png|svg)$/);
  }
});