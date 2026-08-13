import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page, '/cart.html');
  }
itemNames(): Locator {
  return this.page.getByTestId('inventory-item-name');
}
async removeItems(productName: string){
    await this.page
      .locator('.cart_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: /remove/i })
      .click();
  }
}