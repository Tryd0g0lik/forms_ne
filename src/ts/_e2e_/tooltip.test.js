import puppeteer from "puppeteer";

describe("Tooltip from bottom is start:", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    });
    page = await browser.newPage();
  });

  test('Bottom is testing now:', async () => {
    await page.goto('http://localhost:9000');
    const submit = await page.$('span.oversubmite');
    await submit.click();


  }, 5000);

  afterEach(async () => {
    await page.screenshot({
      path: './fullpage.png',
    });
    await browser.close()
  });

}

);
