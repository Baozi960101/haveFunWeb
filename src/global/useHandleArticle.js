import { useState } from "react";
import { ScrollToTop } from "./Scroll";

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

  const [fiveItemPost, setFiveItemPost] = useState([]);
  //只拿五筆的大型資料
  const [verticalFourPost, setVerticalFourPost] = useState([]);
  //只拿直立式的4筆資料

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

  async function FetchTwoItem(API) {
    const res = await fetch(API);
    const data = await res.json();
    return data.data.slice(0, 2);
  }

  async function FetchFiveItem(API) {
    const res = await fetch(API);
    const data = await res.json();
    return data.data.slice(0, 5);
  }

  async function FetchVerticalFourItem(API) {
    const res = await fetch(API);
    const data = await res.json();
    return data.data.slice(0, 4);
  }

  async function allfetch(API) {
    setNowLoading(true);
    const [twoPost, fourPost, fivePost] = await Promise.all([
      FetchTwoItem(API),
      FetchVerticalFourItem(API),
      FetchFiveItem(API),
    ]);
    setTwoItemPost(twoPost);
    setVerticalFourPost(fourPost);
    setFiveItemPost(fivePost);
    setNowLoading(false);
  }

  async function ChangePrevPage() {
    if (page === 1) {
      alert("目前在第一頁囉");
      return;
    }
    const res = await fetch(prevPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
  }

  async function ChangeNextPage() {
    if (page === nowLastPage) {
      alert("最後一頁囉");
      return;
    }
    const res = await fetch(nextPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
  }

  return {
    fiveItemPost,
    verticalFourPost,
    twoItemPost,
    setFiveItemPost,
    FetchFiveItem,
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
  };
}
