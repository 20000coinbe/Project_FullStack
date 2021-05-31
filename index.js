const axios = require("axios");
const cheerio = require("cheerio"); // parsing, Jquery문법과 거의 동일

axios
  .get(
    "https://www.tistory.com/category/getMoreCategoryPost.json?category=life&lastPublished=0&first=true"
  )
  .then((res) => {
    // console.log(res); // JSON형태로 딕셔너리를 사용
    console.log(Object.keys(res)); // [ 'status', 'statusText', 'headers', 'config', 'request', 'data' ]
    // console.log(res.data); // data에 우리가 필요하는 문자열로된 HTML자료가 있다
    const htmlString = res.data;

    // cheerio
    const $ = cheerio.load(htmlString);
    const href = $("a").attr("href"); // a태그의 href속성값

    console.log(href); // https://www.iana.org/domains/example

    console.log(res.data);
  });
