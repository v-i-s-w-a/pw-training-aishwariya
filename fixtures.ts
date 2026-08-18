import { test as base, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};
export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  cartPage: async ({ inventoryPage, page }, use) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addProduct('Sauce Labs Backpack');
    await inventoryPage.addProduct('Sauce Labs Bike Light');
    await inventoryPage.openCart();
    await use(cartPage);
  },
});

export { expect };