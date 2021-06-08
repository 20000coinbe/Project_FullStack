const puppeteer = require("puppeteer");

// IIFE : 즉시실행함수
async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });
  await browser.close();
};
