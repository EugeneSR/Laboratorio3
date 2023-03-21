import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');

  
  await page.locator('#remote-testing').check();
  await page.waitForTimeout(200);
  await page.locator('#reusing-js-code').check();
  await page.waitForTimeout(200);
  await page.locator('#background-parallel-testing').check();
  await page.waitForTimeout(200);
  await page.locator('#continuous-integration-embedding').check();
  await page.waitForTimeout(200);

/*********** habilitar para que de falso y lance un error  ******/
  //await page.getByTestId('analysis-checkbox').uncheck();
/**********************************************************/
  await page.locator('#traffic-markup-analysis').check();

  /***************Verifica que Anailisis este chequeado*****************/

  expect(await page.isChecked('#traffic-markup-analysis')).toBeTruthy()

  /********************************************************/

});