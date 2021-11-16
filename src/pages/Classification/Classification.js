import { useEffect } from "react";
import styled from "styled-components";
import { ChangePageButton } from "../../global/changePage";
import {
  ClassificationPostRightContent,
  ClassificationLinePostRWD,
} from "../../global/QrCode";
import useHandleArticle from "../../global/useHandleArticle";
import { TestURL } from "../../global/API";
import {
  ClassificationArticle,
  BigBulletinBoard,
  MainPostTitle,
} from "../../global/Post";

const MainBox = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  margin: 50px auto;
  box-sizing: border-box;
  font-weight: 600;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
  }
  @media screen and (max-width: 799px) {
    display: block;
  }
`;

const MainPostRight = styled.div`
  width: 32%;
  position: sticky;
  height: 750px;
  top: 0;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    width: 240px;
  }

  @media screen and (max-width: 799px) {
    display: none;
  }
`;

const MainPostLeft = styled.div`
  width: 68%;

  @media screen and (max-width: 799px) {
    width: 95%;
    margin: auto;
  }
`;

const MainTitle = styled.div`
  width: 100%;
  font-size: 46px;
  font-weight: 600;
  margin-bottom: 7px;
`;
const ClassificationArticleMainBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ClassificationPost() {
  const {
    FetchFiveItem,
    fiveItemPost,
    FetchDate,
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
  } = useHandleArticle();

  useEffect(() => {
    FetchDate(TestURL);
    FetchFiveItem(TestURL);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainBox>
        <MainPostLeft>
          <MainTitle>星娛樂趣</MainTitle>
          <ClassificationArticleMainBox>
            {post.map((data) => {
              return (
                <ClassificationArticle
                  key={data.crawler_No}
                  to={data.crawler_No}
                  src={data.crawler_PicUrl}
                  title={`${data.crawler_Title.substring(0, 25)}...`}
                  time={data.crawler_Date}
                />
              );
            })}
          </ClassificationArticleMainBox>
          <ChangePageButton
            page={page}
            changeNextPage={ChangeNextPage}
            changePrevPage={ChangePrevPage}
          />
        </MainPostLeft>
        <MainPostRight>
          <ClassificationPostRightContent />
        </MainPostRight>
        <ClassificationLinePostRWD />
      </MainBox>
      <MainBox>
        <MainPostTitle style={{ width: "140px" }}>你可能會有興趣</MainPostTitle>
      </MainBox>
      <MainBox>
        {fiveItemPost.map((data) => {
          return (
            <BigBulletinBoard
              key={data.crawler_No}
              to={data.crawler_No}
              src={data.crawler_PicUrl}
              title={`${data.crawler_Title.substring(0, 25)}...`}
              time={data.crawler_Date}
            />
          );
        })}
      </MainBox>
    </>
  );
}