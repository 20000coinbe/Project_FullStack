const puppeteer = require("puppeteer");

// IIFE : 즉시실행함수
(async () => {
  const browser = await puppeteer.launch({
    // 브라우저상에서 실행시키기
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    // 뷰포트설정도 가능
    width: 1440,
    height: 1080,
  });
  await page.goto("https://example.com");
  // 현재디렉토리에 'example.png'로 스크린샷 저장
  // await page.screenshot({ path: "example.png" });
  // await browser.close();
})();
