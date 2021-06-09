const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const crawling = async (href) => {
  const broswer = await puppeteer.launch({
    headless: false,
  });

  const page = await broswer.newPage();
  await page.goto(href);

  // 추가로 랜더링되는 정보들 가져오기(cheerio 활용)
  const html = await page.content(); // html문서전체를 가져온다
  const $ = cheerio.load(html);
  // 타이틀과 하이퍼링크 가져오기
  let hrefArray = [];
  $("ul.list_tistory > li > a").each((index, element) => {
    const href = $(element).attr("href");
    const title = $(element).find(".inner_desc_tit").text();
    hrefArray.push({
      href,
      title,
    });
  });

  console.log(hrefArray);
  await broswer.close();
  hrefArray.forEach((item) => {
    crawling(item.href);
  });
};

// -------------
(async () => {
  const broswer = await puppeteer.launch({
    headless: false,
  });

  const page = await broswer.newPage();
  await page.goto("https://www.tistory.com/category/life");

  // 추가로 랜더링되는 정보들 가져오기(cheerio 활용)
  const html = await page.content(); // html문서전체를 가져온다
  const $ = cheerio.load(html);
  // 타이틀과 하이퍼링크 가져오기
  let hrefArray = [];
  $("ul.list_tistory > li > a").each((index, element) => {
    const href = $(element).attr("href");
    const title = $(element).find(".inner_desc_tit").text();
    hrefArray.push({
      href,
      title,
    });
  });

  console.log(hrefArray);
  await broswer.close();
  hrefArray.forEach((item) => {
    crawling(item.href);
  });
})();
