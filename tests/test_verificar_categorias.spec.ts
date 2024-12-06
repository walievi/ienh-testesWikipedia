import { test, expect } from '@playwright/test';

test('Verificar categorias de uma página', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Filosofia');
  const categories = await page.locator('#catlinks ul li a').allInnerTexts();
  expect(categories).toContain('Filosofia');
});