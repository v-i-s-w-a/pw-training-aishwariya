import { test, expect } from '../fixtures';

test('Add two products, verify cart, remove one product', async ({ cartPage }) => {
  await expect(cartPage.itemNames()).toContainText([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
  ]);
  await cartPage.removeItems('Sauce Labs Backpack');
  await expect(cartPage.itemNames()).toHaveText('Sauce Labs Bike Light');
});