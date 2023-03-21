import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {

  await page.goto('https://devexpress.github.io/testcafe/example/');

  let select = await page.$("#preferred-interface");
  /*** Valores  */
  // const opt = ("Command Line"); //Both ,Command Line, JavaScript API

  const expec = ("Both");
  let CommandLine = await select?.selectOption('Command Line');
  let Javascript = await select?.selectOption('JavaScript API');
  let Both = await select?.selectOption('Both');

  expect(Both).toContain(expec);

  /****** Seleccionar otra manera ********/

  /*await page.locator("#preferred-interface")
  .selectOption({
    label: "Both",
  })
  await page.waitForTimeout(400);*/

  /*********************************/

});