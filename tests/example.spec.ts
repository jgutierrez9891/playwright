import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('webscraping example', async ({ page }) => {
  
  await page.goto('https://mercadolibre.com.co/');

  await page.locator('input[id=\'cb1-edit\']').fill('iphone');
  await page.keyboard.press('Enter');
  await expect(page.locator('ol[class=\'ui-search-layout ui-search-layout--stack shops__layout\']')).toBeVisible();

  const list = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//h2').allInnerTexts();

  console.log('the total number of results is: ', list)

  for(let title of list){
    console.log('the title is: ', title)
  }
});
