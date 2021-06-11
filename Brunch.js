// 브런치 크롤링
/* brunc.co.kr/robots.txt 
  User-agent: *
  Allow: /
*/

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
  await page.goto("https://brunch.co.kr/search");
  await page.click("input.txt_search"); // 검색창이 있는 태그
  await page.keyboard.type("Hello World"); // 검색어
  await page.keyboard.press("Enter");
  // 0. 검색완료

  // 1. 마우스 스크롤 or 키보드 화살표 아래를 눌러서 스크롤내리기
  await page.waitForNavigation(); // ERROR : 네비게이션 에러 해결

  let infiniteScrollInterval = setInterval(async () => {
    await page.evaluate(() => {
      console.log(window.innerHeight); // ERROR : 네비게이션이 로드된지 않은 상태여서
      window.scrollBy(0, window.innerHeight); // 무한스크롤
    });
  }, 1000);

  setTimeout(async () => {
    clearInterval(infiniteScrollInterval);
    await browser.close();
  }, 1000 * 10);
})();
