import { test, expect } from '@playwright/test';

test('Select a raddio button based on value', async ({ page }) => {

  await page.goto('https://devexpress.github.io/testcafe/example/');
  
  /*******Valores a esperar********/
  /**
   * Linux
   * MacOS
   * Windows
   ************************************/
  const expec=page.locator("input[value='Linux']");

  await page.locator('#windows').check();
  await page.locator('#macos').check();
  await page.locator('#linux').check();
 
  await expect(expec).toBeChecked();


});