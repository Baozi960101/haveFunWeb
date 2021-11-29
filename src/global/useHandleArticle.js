import { useState } from "react";
import { ScrollToTop } from "./Scroll";
import { fetchAPIName } from "./API";

//此包含引入所有文章的功能 以及換頁功能
export default function useHandleArticle() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [nowLastPage, setNowLastPage] = useState("");

  const [nowLoading, setNowLoading] = useState(false);

  const [twoItemPost, setTwoItemPost] = useState([]);
  //只能精選2個的大型資料

  const [horizontalFinancialNews, setHorizontalFinancialNews] = useState([]);
  const [horizontalVehicles, setHorizontalVehicles] = useState([]);
  const [horizontalWorldNews, setHorizontalWorldNews] = useState([]);

  const [boutiquesData, setBoutiquesData] = useState([]);
  const [financialNewsData, setFinancialNewsData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);
  const [worldNewsData, setWorldNewsData] = useState([]);

  const [popularData, setPopularData] = useState([]);

  //以下是來源

  async function FetchDate(API) {
    setNowLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    setNowLoading(false);
  }

  async function FetchTwoItem(source) {
    const res = await fetch(fetchAPIName(source));
    const data = await res.json();
    return data.data.slice(0, 2);
  }

  async function FetchFiveItem(source) {
    const res = await fetch(fetchAPIName(source));
    const data = await res.json();
    return data.data.slice(0, 5);
  }

  async function FetchVerticalFourItem(source) {
    const res = await fetch(fetchAPIName(source));
    const data = await res.json();
    return data.data.slice(0, 4);
  }

  async function allfetch() {
    setNowLoading(true);
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`
    );
    const { data } = await res.json();
    const Boutiques = data.Boutiques.map((item) => {
      return item.source_Name;
    });
    const Vehicles = data.Vehicles.map((item) => {
      return item.source_Name;
    });
    const WorldNews = data.WorldNews.map((item) => {
      return item.source_Name;
    });
    const FinancialNews = data.FinancialNews.map((item) => {
      return item.source_Name;
    });
    const [
      verticalFourBoutiques,
      verticalFourvehicles,
      verticalFourWorldNews,
      verticalFourFinancialNews,
      horizontalFinancialNews,
      horizontalVehicles,
      horizontalWorldNews,
      vehicles,
    ] = await Promise.all([
      FetchVerticalFourItem(Boutiques.join()),
      FetchVerticalFourItem(Vehicles.join()),
      FetchVerticalFourItem(WorldNews.join()),
      FetchVerticalFourItem(FinancialNews.join()),
      FetchFiveItem(FinancialNews.join()),
      FetchFiveItem(Vehicles.join()),
      FetchFiveItem(WorldNews.join()),
      FetchTwoItem(Vehicles.join()),
    ]);
    setBoutiquesData(verticalFourBoutiques);
    setVehiclesData(verticalFourvehicles);
    setWorldNewsData(verticalFourWorldNews);
    setFinancialNewsData(verticalFourFinancialNews);
    setHorizontalFinancialNews(horizontalFinancialNews);
    setHorizontalVehicles(horizontalVehicles);
    setHorizontalWorldNews(horizontalWorldNews);
    setTwoItemPost(vehicles);
    setNowLoading(false);
  }

  async function boutiquesPageArticle() {
    setNowLoading(true);
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`
    );
    const { data } = await res.json();
    const Boutiques = data.Boutiques.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(Boutiques.join()));
  }

  async function vehiclesPageArticle() {
    setNowLoading(true);
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`
    );
    const { data } = await res.json();
    const Vehicles = data.Vehicles.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(Vehicles.join()));
  }

  async function worldNewsPageArticle() {
    setNowLoading(true);
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`
    );
    const { data } = await res.json();
    const WorldNews = data.WorldNews.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(WorldNews.join()));
  }

  async function financialNewsPageArticle() {
    setNowLoading(true);
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`
    );
    const { data } = await res.json();
    const FinancialNews = data.FinancialNews.map((item) => {
      return item.source_Name;
    });
    FetchDate(fetchAPIName(FinancialNews.join()));
  }

  async function popularArticle() {
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`
    );
    const { data } = await res.json();
    const Boutiques = data.Boutiques.map((item) => {
      return item.source_Name;
    });
    const homeRes = await fetch(fetchAPIName(Boutiques.join()));
    const homedata01 = await homeRes.json();
    setPopularData(homedata01.data.slice(0, 5));
  }

  async function ChangePrevPage() {
    if (page === 1) {
      alert("The first page");
      return;
    }
    setNowLoading(true);
    const res = await fetch(prevPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
    setNowLoading(false);
  }

  async function ChangeNextPage() {
    if (page === nowLastPage) {
      alert("The Last page");
      return;
    }
    setNowLoading(true);
    const res = await fetch(nextPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
    setNowLoading(false);
  }

  return {
    twoItemPost,
    FetchDate,
    post,
    setPost,
    page,
    setPage,
    prevPage,
    setPrevPage,
    nextPage,
    setNextPage,
    nowLastPage,
    setNowLastPage,
    ChangeNextPage,
    ChangePrevPage,
    allfetch,
    nowLoading,
    setNowLoading,
    popularData,
    boutiquesPageArticle,
    popularArticle,
    vehiclesPageArticle,
    financialNewsPageArticle,
    worldNewsPageArticle,
    boutiquesData,
    financialNewsData,
    vehiclesData,
    worldNewsData,
    horizontalFinancialNews,
    horizontalVehicles,
    horizontalWorldNews,
  };
}
