const MainURL = "https://argus.work/argus/api/v1";

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

export function FetchTestAPI() {
  return fetch(TestURL).then((res) => res.json());
}

let nowDate = getDay(0);
let LastNowDate = getDay(-7);

export const TestURL = `${MainURL}/data?key=高雄市&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const TodayURL = `${MainURL}/data?key=高雄市&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=chinatimes,ptt,yahoo`;

export const KaohsiungAPI = `${MainURL}/data?key=高雄市&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const TaichungAPI = `${MainURL}/data?key=台中市&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const TaipeiAPI = `${MainURL}/data?key=台北市&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const PopularAPI = `${MainURL}/data?key=疫苗&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const DisasterAPI = `${MainURL}/data?key=災害&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const InternationalityAPI = `${MainURL}/data?key=國際&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=chinatimes`;

export const AloneApi = (id) => {
  return `${MainURL}/data/${id}`;
};
