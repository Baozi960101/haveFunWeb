const MainURL = "https://argus.work/argus/api/v1";

const MainApi = "https://api.hinduhope.com/api/v1/data";

function getDay(day) {
  let today = new Date();
  let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); //關鍵代碼

  let tYear = today.getFullYear();
  let tMonth = today.getMonth();
  let tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}

function doHandleMonth(month) {
  let m = month;
  if (month.toString().length === 1) {
    m = "0" + month;
  }
  return m;
}

let nowDate = getDay(0);
let LastNowDate = getDay(-7);

export function confirmWebsiteName() {
  return fetch().then((res) => res.json());
}

export function testFetchAPI(keyword, sourse) {
  return fetch(
    `${MainURL}/data?key=${keyword}&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`
  ).then((res) => res.json());
}

export const AloneApi = (id) => {
  return `${MainApi}/${id}`;
};

export function fetchAPIName(source) {
  return `${MainApi}?start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${source}`;
}
