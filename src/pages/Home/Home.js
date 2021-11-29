import { useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import {
  Slideshow,
  SlideShowMainPost,
  ClassificationSlideshow,
} from "./Slideshow";
import { ClassificationPostRightContent } from "../../global/FbCode";
import { BigBulletinBoard, MainPostTitle } from "../../global/Post";
import useHandleArticle from "../../global/useHandleArticle";
import { Link } from "react-router-dom";
import { LoadingBox } from "../../global/Loading";

const Goto = styled(Link)`
  text-decoration: none;
`;

const AnnouncementBox = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1250px;
  height: 45px;
  margin: 20px auto;
  box-sizing: border-box;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 799px) {
    max-width: 97%;
    margin-bottom: 70px;
  }
`;

const AnnouncementTitle = styled.div`
  display: flex;
  width: 115px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f18b23;
  letter-spacing: 1px;
  box-sizing: border-box;

  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

const MarqueeText = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 100%;
  padding: 0 10px;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 799px) {
    font-size: 14px;
    height: 50px;
  }

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    height: 50px;
  }
`;

const AnnouncementContent = styled.div`
  width: 1110px;
  position: relative;

  @media screen and (max-width: 1300px) {
    max-width: 80%;
  }
`;

const Announcement = ({ content }) => {
  return (
    <AnnouncementBox>
      <AnnouncementTitle>Newest</AnnouncementTitle>
      <AnnouncementContent>
        <Marquee speed="100" pauseOnHover="true">
          {content.map((data) => {
            return (
              <>
                <Goto key={data.crawler_No} to={`/${data.crawler_No}`}>
                  <MarqueeText>
                    {`${data.crawler_Title.substring(0, 50)}...`}
                  </MarqueeText>
                </Goto>
              </>
            );
          })}
        </Marquee>
      </AnnouncementContent>
    </AnnouncementBox>
  );
};

const MainPost = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;
  box-sizing: border-box;
  font-weight: 600;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
  }
  @media screen and (max-width: 799px) {
    display: block;
  }
`;

const PcMainPostTitle = styled.div`
  @media screen and (max-width: 799px) {
    display: none;
  }
`;

const RWDMainPostTitle = styled.div`
  display: none;

  @media screen and (max-width: 799px) {
    display: block;
    margin-top: 30px;
  }
`;

const MainPostTitleThree = () => {
  return (
    <>
      <PcMainPostTitle>
        <MainPost>
          <MainPostLeftBox>
            <MainPostLeftText>Main</MainPostLeftText>
          </MainPostLeftBox>
          <MainPostMiddleBox>
            <MainPostMiddleText>Special</MainPostMiddleText>
          </MainPostMiddleBox>
          <MainPostMiddleBox>
            <MainPostLeftText>Newest</MainPostLeftText>
          </MainPostMiddleBox>
        </MainPost>
      </PcMainPostTitle>
    </>
  );
};

const MainPostLeftBox = styled.div`
  width: 50%;

  @media screen and (max-width: 799px) {
    width: 97%;
    margin: 0 auto;
  }
`;

const MainPostLeftText = styled.div`
  width: 90px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid orange;
  margin-bottom: 20px;
`;

const MainPostLeft = ({ content }) => {
  return (
    <>
      <RWDMainPostTitle>
        <MainPostLeftBox>
          <MainPostLeftText>Main</MainPostLeftText>
        </MainPostLeftBox>
      </RWDMainPostTitle>
      <MainPostLeftBox>
        <Slideshow content={content} />
      </MainPostLeftBox>
    </>
  );
};

const MainPostMiddleBox = styled.div`
  width: 24%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 799px) {
    width: 97%;
    margin: 0 auto;
  }
`;

const MainPostMiddleText = styled.div`
  width: 90px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #ae2d53;
  margin-bottom: 20px;
`;

const MainPostMiddle = ({ content }) => {
  return (
    <>
      <RWDMainPostTitle>
        <MainPostMiddleBox>
          <MainPostMiddleText>Special</MainPostMiddleText>
        </MainPostMiddleBox>
      </RWDMainPostTitle>
      <MainPostMiddleBox>
        {content.map((data) => {
          return (
            <SlideShowMainPost
              height="215px"
              key={data.crawler_No}
              to={data.crawler_No}
              src={data.crawler_PicUrl}
              fontSize="17px"
              label={`${data.crawler_Keyword.substring(0, 6)}...`}
              text={`${data.crawler_Title.substring(0, 25)}...`}
              time={data.crawler_Date}
            />
          );
        })}
      </MainPostMiddleBox>
    </>
  );
};

const MainPostRightBox = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 799px) {
    width: 97%;
    margin: 0 auto;
  }
`;

const MainPostRightText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  @media screen and (max-width: 799px) {
    justify-content: flex-start;
    margin-top: 15px;
  }
`;

const MainPostRightImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #f5f5f5;
  margin-right: 30px;

  @media screen and (max-width: 799px) {
    width: 140px;
    margin-right: 10px;
  }
`;

const MainPostRightImgContent = styled.img`
  height: 100%;
  cursor: pointer;
`;

const MainPostRightImg = ({ width, height, src }) => {
  return (
    <MainPostRightImgBox>
      <MainPostRightImgContent
        style={{ width: width, height: height }}
        src={src}
      />
    </MainPostRightImgBox>
  );
};

const MainPostRightDescribeBox = styled.div`
  width: 60%;
  padding-top: 6px;

  @media screen and (max-width: 799px) {
    padding-top: 20px;
  }
`;

const MainPostRightDescribeTitle = styled.div`
  color: orange;
  font-size: 14px;
  cursor: pointer;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    font-size: 12px;
  }
`;

const MainPostRightDescribeSubTitle = styled.div`
  color: black;
  font-size: 17px;
  padding-top: 3px;
  cursor: pointer;
  text-align: left;

  :hover {
    color: #ae2d53;
  }

  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
`;

const MainPostRight = ({ content }) => {
  return (
    <>
      <RWDMainPostTitle>
        <MainPostRightBox>
          <MainPostLeftText>Newest</MainPostLeftText>
        </MainPostRightBox>
      </RWDMainPostTitle>
      <MainPostRightBox>{content}</MainPostRightBox>
    </>
  );
};

const ClassificationPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1250px;
  margin: 50px auto 0 auto;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
  }
  @media screen and (max-width: 799px) {
    max-width: 97%;
  }
`;

const ClassificationPostLeftBox = styled.div`
  width: 65%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const ArticleBox = styled.div`
  width: 100%;
  border-top: 1px solid #7a7a7a;
  border-bottom: 1px solid #7a7a7a;
  box-sizing: border-box;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const VerticalArticleBox = styled.div`
  width: 48%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;

  @media screen and (max-width: 767px) {
    width: 97%;
  }
`;

const ArticleMainTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 150px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #ae2d53;
`;

const ClassificationPostLeftContentMain = ({ to, label, text, time }) => {
  return (
    <MainPostRightDescribeBox style={{ width: "70%" }}>
      <MainPostRightDescribeTitle>{label}</MainPostRightDescribeTitle>
      <Goto to={`/${to}`}>
        <MainPostRightDescribeSubTitle>
          {`${text.substr(0, 20)}..`}
        </MainPostRightDescribeSubTitle>
      </Goto>
      <MainPostRightDescribeSubTitle
        style={{ fontSize: "12px", cursor: "auto" }}
      >
        {time}
      </MainPostRightDescribeSubTitle>
    </MainPostRightDescribeBox>
  );
};

// const ClassificationPostLeftMain = () => {
//   return (
//     <VerticalArticleBox>
//       <ArticleMainTitle>
//         都市傳說
//       </ArticleMainTitle>
//       <SlideShowMainPost
//         height="227px"
//         src={cityTest01}
//         fontSize="17px"
//         label="都市傳說"
//         text="「恐怖水缸」讓你跟鱷魚面對面　恐懼指數破表「敢挑戰的都是勇者」"
//         time="三個月前"
//       />
//       <MainPostRightText>
//         <MainPostRightImg width="100%" height="auto" src={cityTest02} />
//         <ClassificationPostLeftContentMain
//           label="都市傳說"
//           text="【真相】這實驗將人變成冷血怪物！與神對話的都市傳說真相！"
//           time="六個月前 ago"
//         />
//       </MainPostRightText>
//       <MainPostRightText>
//         <MainPostRightImg width="100%" height="auto" src={cityTest03} />
//         <ClassificationPostLeftContentMain
//           label="都市傳說"
//           text="120萬人護送500噸黃金，為何黃金不翼而飛？尋找末代沙皇最後的遺產「曉涵哥來了」"
//           time="三個月前 ago"
//         />
//       </MainPostRightText>
//     </VerticalArticleBox>
//   );
// };

const VerticalFourArticle = ({ to, src, label, text, time }) => {
  return (
    <>
      <MainPostRightText>
        <Goto to={`/${to}`}>
          <MainPostRightImg width="100%" height="auto" src={src} />
        </Goto>
        <ClassificationPostLeftContentMain
          to={to}
          label={label}
          text={text}
          time={time}
        />
      </MainPostRightText>
    </>
  );
};

const ClassificationPostRight = styled.div`
  width: 30%;
  position: sticky;
  height: 500px;
  top: 90px;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    width: 240px;
  }

  @media screen and (max-width: 799px) {
    width: 80%;
    position: relative;
  }
`;

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

const MainLeftNoBorderBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const MainLeftBox = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid #7a7a7a;
  border-bottom: 1px solid #7a7a7a;
  box-sizing: border-box;
  padding: 50px 0;
  margin-top: 50px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

function VerticalFourArticleMain(FourItemPost) {
  return FourItemPost.map((data) => {
    return (
      <VerticalFourArticle
        key={data.crawler_No}
        to={data.crawler_No}
        label={`${data.crawler_Keyword.substring(0, 10)}...`}
        src={data.crawler_PicUrl}
        text={`${data.crawler_Title.substring(0, 25)}...`}
        time={data.crawler_Date}
      />
    );
  });
}

function MainBigBulletinBoard(fiveItemPost) {
  return fiveItemPost.map((data) => {
    return (
      <BigBulletinBoard
        key={data.crawler_No}
        to={data.crawler_No}
        src={data.crawler_PicUrl}
        title={`${data.crawler_Title.substring(0, 25)}...`}
        time={data.crawler_Date}
      />
    );
  });
}

export default function Home() {
  const {
    allfetch,
    nowLoading,
    popularData,
    popularArticle,
    boutiquesData,
    financialNewsData,
    vehiclesData,
    worldNewsData,
    horizontalFinancialNews,
    horizontalVehicles,
    horizontalWorldNews,
    twoItemPost,
  } = useHandleArticle();

  useEffect(() => {
    allfetch();
    popularArticle();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {nowLoading && <LoadingBox />}
      <Announcement content={twoItemPost} />
      {/* 公告欄 */}
      <MainPostTitleThree />
      <MainPost>
        <MainPostLeft content={boutiquesData} />
        <MainPostMiddle content={twoItemPost} />
        <MainPostRight content={VerticalFourArticleMain(vehiclesData)} />
      </MainPost>
      <ClassificationPost>
        <ClassificationPostLeftBox>
          <ArticleBox>
            <VerticalArticleBox>
              <ArticleMainTitle>Boutiques</ArticleMainTitle>
              {VerticalFourArticleMain(boutiquesData)}
            </VerticalArticleBox>
            <VerticalArticleBox>
              <ArticleMainTitle>Vehicles</ArticleMainTitle>
              {VerticalFourArticleMain(vehiclesData)}
            </VerticalArticleBox>
          </ArticleBox>
          <MainLeftBox style={{ width: "100%", border: "0" }}>
            <MainLeftNoBorderBox>
              <MainPostTitle style={{ width: "150px" }}>
                Financial News
              </MainPostTitle>
            </MainLeftNoBorderBox>
            {MainBigBulletinBoard(horizontalFinancialNews)}
          </MainLeftBox>
          <ArticleMainTitle style={{ marginBottom: "30px", width: "130px" }}>
            Vehicles
          </ArticleMainTitle>
          <ClassificationSlideshow content={vehiclesData} />
          <ArticleBox style={{ borderTop: "0" }}>
            <VerticalArticleBox>
              <ArticleMainTitle>Financial News</ArticleMainTitle>
              {VerticalFourArticleMain(financialNewsData)}
            </VerticalArticleBox>
            <VerticalArticleBox>
              <ArticleMainTitle>World News</ArticleMainTitle>
              {VerticalFourArticleMain(worldNewsData)}
            </VerticalArticleBox>
          </ArticleBox>
          <MainLeftBox style={{ width: "100%", border: "0" }}>
            <MainLeftNoBorderBox>
              <MainPostTitle style={{ width: "150px" }}>Vehicles</MainPostTitle>
            </MainLeftNoBorderBox>
            {MainBigBulletinBoard(horizontalVehicles)}
          </MainLeftBox>
          <ArticleMainTitle style={{ marginBottom: "30px", width: "130px" }}>
            World News
          </ArticleMainTitle>
          <ClassificationSlideshow content={horizontalWorldNews} />
        </ClassificationPostLeftBox>
        <ClassificationPostRight>
          <ClassificationPostRightContent />
        </ClassificationPostRight>
        <MainLeftBox>
          <MainLeftNoBorderBox>
            <MainPostTitle style={{ width: "150px" }}>World News</MainPostTitle>
          </MainLeftNoBorderBox>
          {MainBigBulletinBoard(horizontalWorldNews)}
        </MainLeftBox>
      </ClassificationPost>
      <MainBox>
        <MainPostTitle style={{ width: "150px" }}>More Like This</MainPostTitle>
      </MainBox>
      <MainBox>{MainBigBulletinBoard(popularData)}</MainBox>
    </>
  );
}
