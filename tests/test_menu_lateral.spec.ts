
import { test, expect } from '@playwright/test';

test('Navegar usando o menu lateral', async ({ page }) => {
  await page.goto('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Portada');
  await page.click('#vector-main-menu-dropdown');
  const menus = page.locator('#vector-main-menu-unpinned-container');
  expect(await menus.innerHTML()).toContain('<span>Portal comunitário</span>');
});
