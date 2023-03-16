import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.waitForTimeout(800);

    page.once('dialog', dialog => {
        page.waitForTimeout(800);
        console.log(`Dialog message: ${dialog.message()}`);
        page.waitForTimeout(1000);
        dialog.dismiss().catch(() => { });

    });

    await page.getByTestId('populate-button').click();

});