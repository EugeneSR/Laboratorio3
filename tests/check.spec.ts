import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');

  
  await page.getByTestId('remote-testing-checkbox').check();
  await page.waitForTimeout(400);
  await page.getByTestId('reusing-js-code-checkbox').check();
  await page.waitForTimeout(400);
  await page.getByTestId('parallel-testing-checkbox').check();
  await page.waitForTimeout(400);
  await page.getByTestId('ci-checkbox').check();
  await page.waitForTimeout(400);

/*********** habilitar para que de falso y lance un error  ******/
  //await page.getByTestId('analysis-checkbox').uncheck();
/**********************************************************/
  await page.getByTestId('analysis-checkbox').check();

  /***************Verifica que Anailisis este chequeado*****************/

  expect(await page.isChecked('#traffic-markup-analysis')).toBeTruthy()

  /********************************************************/

});