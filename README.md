# Front-End 연습 토이 프로젝트

크롤링(Crawling)과 스크래핑(Scraping)

---

## 1-3. Puppeteer

```js
// 예제
const browser = await puppeteer.launch({
  // 브라우저를 띄운상태로 실행
  headless: false;
});
const page = await browser.newPage();
await page.goto("https://example.com");

// 현재디렉토리에 'example.png'로 스크린샷 저장
await page.screenshot({ path: "example.png" });
// await browser.close();
```

```js
// 예제 Brunch.js

// Brunch.co.kr 무한스크롤 연습
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 900,
  });

  await page.goto("http://brunch.co.kr/serach");
  await page.click("input.txt_search");
  await page.keyboard.type("IT");
  await page.keyboard.press("Enter");

  await page.waitForNavigation();

  // 뷰포트의 높이만큼 스크롤을 내린다
  let infiniteScrollInterval = setInterval(async () => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
  }, 1000);

  setTimeout(async () => {
    clearInterval(infiniteScrollInterval);
    await browser.close();
  }, 1000 * 10);
})();
```

---
