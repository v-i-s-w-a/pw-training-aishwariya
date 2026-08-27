import { expect, test } from '@playwright/test';
test('problem user sees same image for all products', async ({ page }) => {
  await page.goto('/inventory.html');
const images = page.locator('.inventory_item_img img');
const srcs = await images.evaluateAll(imgs => imgs.map(img => img.getAttribute('src')));
expect(srcs.every(src => src === srcs[0])).toBe(true);
await expect(images).toHaveCount(6);
});