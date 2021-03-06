import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ClassificationPostRightContent } from "../../global/FbCode";
import { SlugContext } from "../../global/context";
import { BigBulletinBoard, MainPostTitle } from "../../global/Post";
import { AloneApi } from "../../global/API";
import { LoadingBox } from "../../global/Loading";
import { ScrollToTop } from "../../global/Scroll";
import useHandleArticle from "../../global/useHandleArticle";
import { SEO } from "../../global/Post";

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
  top: 90px;
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

const PostTitleLabel = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

const PostSubTitleLabel = styled.div`
  padding: 2px 5px;
  background-color: #dd9933;
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
  color: white;
`;

const PostTitle = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 50px;
  font-weight: 600;
`;

const PostTime = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const PostMainImgBox = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px 0;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
  }

  @media screen and (max-width: 799px) {
  }
`;

const PostMainImg = styled.img`
  max-width: 100%;
`;

const PostMainText = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.65;
`;

const MainSingleArticle = ({ label, title, time, src, content }) => {
  return (
    <>
      <SEO title={title} src={src} />
      <PostTitleLabel>
        <PostSubTitleLabel>{label}</PostSubTitleLabel>
        {/* <PostSubTitleLabel>????????????</PostSubTitleLabel>
        <PostSubTitleLabel>????????????</PostSubTitleLabel> */}
      </PostTitleLabel>
      <PostTitle>{title}</PostTitle>
      <PostTime>{time}</PostTime>
      <PostMainImgBox>
        <PostMainImg alt="news" src={src} />
      </PostMainImgBox>
      <PostMainText>{content}</PostMainText>
    </>
  );
};

export default function AlonePost() {
  const { aloneSlug } = useContext(SlugContext);
  const [singlePost, setSinglePost] = useState([]);

  const { popularData, popularArticle, setNowLoading, nowLoading } =
    useHandleArticle();

  useEffect(() => {
    setNowLoading(true);
    ScrollToTop();
    if (aloneSlug !== "") {
      fetch(AloneApi(aloneSlug))
        .then((res) => res.json())
        .then((data) => {
          setSinglePost([data.data]);
          setNowLoading(false);
        });
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aloneSlug]);

  useEffect(() => {
    popularArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {nowLoading && <LoadingBox />}
      <MainBox>
        <MainPostLeft>
          {singlePost.map((data) => {
            return (
              <MainSingleArticle
                label={data.crawler_Cate}
                key={data.crawler_No}
                content={data.crawler_Content}
                src={data.crawler_PicUrl}
                title={data.crawler_Title}
                time={data.crawler_Date}
              />
            );
          })}
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
