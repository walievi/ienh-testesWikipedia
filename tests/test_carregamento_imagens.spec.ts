import { test, expect } from '@playwright/test';

test('Verificar carregamento de imagens visíveis em um artigo', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Sistema_Solar');
  const images = await page.locator('img').all();
  for (const image of images) {
    if (await image.isVisible()) {
      const src = await image.getAttribute('src');
      expect(src).not.toBeNull(); // Garante que a imagem tem uma fonte válida
    }
  }
});