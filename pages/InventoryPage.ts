import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page, '/inventory.html');
  }
async addProduct(productName: string) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: /add to cart/i })
      .click();
  }
async openCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}