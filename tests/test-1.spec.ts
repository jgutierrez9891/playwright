import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').press('CapsLock');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('button', { name: 'full te da envío gratis En' }).click();
  await page.getByRole('button', { name: 'full te da envío gratis En' }).click();
  await page.getByRole('link', { name: '' }).click();
  await expect(page.getByTestId('user_id')).toBeEmpty();
  await expect(page.getByTestId('user_id')).toBeEmpty();
  await page.getByTestId('user_id').click();
  await page.getByTestId('user_id').fill('3434');
  await expect(page.getByTestId('user_id')).toHaveValue('3434');
  await expect(page.getByRole('button')).toContainText('Continuar');
  await expect(page.getByRole('heading', { name: 'Ingresa tu e‑mail, teléfono o' })).toBeVisible();
});