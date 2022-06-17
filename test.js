const { Selector } = require("testcafe");

fixture('Fixture');

for (let i=0; i<1000; i++) {
    test(`Test ${i}`, async (browser) => {
        await browser.navigateTo('http://localhost:3666/');
        await browser.expect(Selector('#response').innerText).match(/[0-9]+/);
    });
}
