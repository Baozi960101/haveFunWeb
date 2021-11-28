import { useEffect } from "react";
import styled from "styled-components";
import { ChangePageButton } from "../../global/changePage";
import { ClassificationPostRightContent } from "../../global/FbCode";
import useHandleArticle from "../../global/useHandleArticle";
import {
  ClassificationArticle,
  BigBulletinBoard,
  MainPostTitle,
} from "../../global/Post";
import { LoadingBox } from "../../global/Loading";

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
    padding: 0px 1%;
  }
`;

const MainPostRight = styled.div`
  width: 32%;
  position: sticky;
  height: 750px;
  top: 0;
  padding-left: 50px;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    width: 240px;
  }

  @media screen and (max-width: 799px) {
    width: 80%;
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

export default function Boutiques() {
  const {
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
    nowLoading,
    boutiquesPageArticle,
    popularData,
    popularArticle,
  } = useHandleArticle();

  useEffect(() => {
    boutiquesPageArticle();
    popularArticle();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {nowLoading && <LoadingBox />}
      <MainBox>
        <MainPostLeft>
          <MainTitle>Boutiques</MainTitle>
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
      </MainBox>
      <MainBox>
        <MainPostTitle style={{ width: "150px" }}>More Like This</MainPostTitle>
      </MainBox>
      <MainBox>
        {popularData.map((data) => {
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
