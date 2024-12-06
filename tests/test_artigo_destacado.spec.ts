
import { test, expect } from '@playwright/test';

test('Artigo destacado está presente na página inicial', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/');
  const highlightedArticleTextVisible = await page.locator('text=Artigo em destaque').isVisible();
  expect(highlightedArticleTextVisible).toBeTruthy();
});
