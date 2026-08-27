import{ test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const authFile = ".auth/user.json";
const problemUserAuthFile = ".auth/problem.json";

setup('Authenticate', async ({ page }) => {
    const username = process.env.USERNAME ?? 'standard_user';
    const password = process.env.PASSWORD ?? 'secret_sauce';
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(username, password);
  await expect(page).toHaveURL(/.*inventory.html/);
  await page.context().storageState({ path: authFile });
    });
setup('Problem user Authentication', async ({ page }) => {
    const username = process.env.PROBLEM_USER_USERNAME ?? 'problem_user';
    const password = process.env.PROBLEM_USER_PASSWORD ?? 'secret_sauce';
    const loginPage = new LoginPage(page);    
await loginPage.open();
await loginPage.login(username, password);
await expect(page).toHaveURL(/.*inventory.html/);
await page.context().storageState({ path: problemUserAuthFile });
});