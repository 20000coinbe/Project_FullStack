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

---
