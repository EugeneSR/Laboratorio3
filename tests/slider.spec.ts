import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {

    await page.goto('https://devexpress.github.io/testcafe/example/');

    await page.locator('#tried-test-cafe').check();

    page.keyboard.down("End");

    await page.locator('#tried-test-cafe').press('Tab');

    for (let i = 0; i < 10; i++) {
        await page.locator('span').press('ArrowRight');
    }

    for (let j = 0; j < 10; j++) {
        await page.locator('span').press('ArrowLeft');
    }

});