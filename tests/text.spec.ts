import { test, expect } from '@playwright/test';

test.skip('Test ingresa texto, in the input type text', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("#developer-name").click();

  const inputName ="Peter Parker";
  await page.locator("#developer-name").fill(`${inputName}`);
  await page.locator("#developer-name").press('Enter');
  await page.locator("#submit-button").click();
  await page.goto("https://devexpress.github.io/testcafe/example/thank-you.html")

  expect(inputName).toBeTruthy();
  /** Success: Ingresa e imprime texto */
});

test.skip('Test, ingresa valores numericos en un campo tipo texto ', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("#developer-name").click();

  const inputName =3333333;
  await page.locator("#developer-name").fill(`${inputName}`);
  await page.locator("#developer-name").press('Enter');
  await page.locator("#submit-button").click();

  await page.goto("https://devexpress.github.io/testcafe/example/thank-you.html")

  expect(inputName).toBeTruthy();

   /** Error: ingresa e imprime valores  numericos en un campo de solo texto */
});

test.skip('Test, ingresa caracteres y simbolos en un campo tipo texto', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("#developer-name").click();

  const inputName ="!!???°°°";
  await page.locator("#developer-name").fill(`${inputName}`);
  await page.locator("#developer-name").press('Enter');
  await page.locator("#submit-button").click();

  await page.goto("https://devexpress.github.io/testcafe/example/thank-you.html")

  expect(inputName).toBeTruthy();
  
/** Error: ingresa e imprime caracteres y simbolos en un campo de solo texto */
 
});


