const puppeteer = require("puppeteer");

(async () => {
  const broswer = await puppeteer.launch({
    headless: false,
  });

  const page = await broswer.newPage();
  await page.setViewport({
    width: 2500,
    height: 2080,
  });

  await page.goto("http://www.tistory.com/category/life");
})();
