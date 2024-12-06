import { test, expect } from '@playwright/test';

test('Verificar presença de referências em um artigo', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Filosofia');
  const referencesSection = await page.locator('h2:has-text("Referências"), h2:has-text("Notas")');
  expect(await referencesSection.isVisible()).toBeTruthy();

  const referencesList = await page.locator('ol.references li');
  expect(await referencesList.count()).toBeGreaterThan(0);
});