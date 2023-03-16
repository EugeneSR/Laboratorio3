import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {

    let tamano = 25;
    test.setTimeout(400000);


    for (let i = 1; i < tamano; i++) {
        await page.goto('https://devexpress.github.io/testcafe/example/');

        if (i === 1) {
            await page.locator('#remote-testing').check();
        }
        if (i === 2) {
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
        }
        if (i === 3) {

            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
        }
        if (i === 4) {
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
            await page.locator('#continuous-integration-embedding').check();
        }
        if (i === 5) {

            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#traffic-markup-analysis').check();
        }
        // 2
        if (i === 6) { await page.locator('#reusing-js-code').check(); }
        if (i === 7) {
            await page.locator('#reusing-js-code').check();
            await page.locator('#remote-testing').check();
        }
        if (i === 8) {
            await page.locator('#reusing-js-code').check();
            await page.locator('#remote-testing').check();
            await page.locator('#background-parallel-testing').check();
        }
        if (i === 9) {
            await page.locator('#reusing-js-code').check();
            await page.locator('#remote-testing').check();
            await page.locator('#background-parallel-testing').check();
            await page.locator('#continuous-integration-embedding').check();
        }
        if (i === 10) {
            await page.locator('#reusing-js-code').check();
            await page.locator('#remote-testing').check();
            await page.locator('#background-parallel-testing').check();
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#traffic-markup-analysis').check();
        }
        //3
        if (i === 11) {
            await page.locator('#background-parallel-testing').check();
        }
        if (i === 12) {

            await page.locator('#background-parallel-testing').check();
            await page.locator('#remote-testing').check();

        }
        if (i === 13) {
            await page.locator('#background-parallel-testing').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            
        }
        if (i === 14) { 
            await page.locator('#background-parallel-testing').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#continuous-integration-embedding').check()
           
        }
        if (i === 15) {
            await page.locator('#background-parallel-testing').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#traffic-markup-analysis').check();
           
        }
        //4
        if (i === 16) {
            await page.locator('#continuous-integration-embedding').check();
        }

        if (i === 17) {
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#remote-testing').check();
        }
        if (i === 18) {
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
        }
        if (i === 18) {
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
        }
        if (i === 19) {
            await page.locator('#continuous-integration-embedding').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
            await page.locator('#traffic-markup-analysis').check();
        }
        //5
        if (i === 20) {
            await page.locator('#traffic-markup-analysis').check();
        }
        if (i === 21) {
            await page.locator('#traffic-markup-analysis').check();
            await page.locator('#remote-testing').check();
        }
        if (i === 22) {
            await page.locator('#traffic-markup-analysis').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
        }
        if (i === 23) {
            await page.locator('#traffic-markup-analysis').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
        }
        if (i === 24) {
            await page.locator('#traffic-markup-analysis').check();
            await page.locator('#remote-testing').check();
            await page.locator('#reusing-js-code').check();
            await page.locator('#background-parallel-testing').check();
            await page.locator('#continuous-integration-embedding').check();
        }
    }
    
});

