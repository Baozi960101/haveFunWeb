import { useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import {
  Slideshow,
  SlideShowMainPost,
  ClassificationSlideshow,
} from "./Slideshow";
import special01 from "../../images/special.jpeg";
import special02 from "../../images/special02.jfif";
import rightText01 from "../../images/rightText01.jpg";
import rightText02 from "../../images/rightText02.jpg";
import rightText03 from "../../images/rightText03.jpg";
import rightText04 from "../../images/rightText04.jpg";
import playGame01 from "../../images/playGame01.jpeg";
import playGame02 from "../../images/playGame02.jfif";
import playGame03 from "../../images/playGame03.webp";
import playGame04 from "../../images/playGame04.jpg";
import playGame05 from "../../images/playGame05.jpg";
import cityTest01 from "../../images/cityTest01.jpg";
import cityTest02 from "../../images/cityTest02.jpg";
import cityTest03 from "../../images/cityTest03.jpg";
import villagersTest01 from "../../images/villagersTest01.jpeg";
import villagersTest02 from "../../images/villagersTest02.jpeg";
import villagersTest03 from "../../images/villagersTest03.jpeg";
import villagersTest04 from "../../images/villagersTest04.jpeg";
import {
  ClassificationPostRightContent,
  ClassificationLinePostRWD,
} from "../../global/QrCode";
import { SlugContext } from "../../global/context";
import { BigBulletinBoard, MainPostTitle } from "../../global/Post";
import useHandleArticle from "../../global/useHandleArticle";
import { TestURL } from "../../global/API";

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
  background-color: #ae2d53;
  letter-spacing: 1px;
  box-sizing: border-box;

  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

const MarqueeText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 799px) {
    font-size: 14px;
  }
`;

const Announcement = () => {
  return (
    <AnnouncementBox>
      <AnnouncementTitle>最新消息</AnnouncementTitle>
      <div style={{ position: "relative", width: "1110px" }}>
        <Marquee speed="100" pauseOnHover="true">
          <MarqueeText>
            S5第一場大型爭城戰開始喇~~《三國志．戰略版》[突然直播]#18
          </MarqueeText>
          <MarqueeText>
            S9第一場大型爭城戰開始喇~~《三國志．戰略版》#20
          </MarqueeText>
        </Marquee>
      </div>
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
            <MainPostLeftText>玩家焦點</MainPostLeftText>
          </MainPostLeftBox>
          <MainPostMiddleBox>
            <MainPostMiddleText>精選特輯</MainPostMiddleText>
          </MainPostMiddleBox>
          <MainPostMiddleBox>
            <MainPostLeftText>最新資訊</MainPostLeftText>
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
  width: 80px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid orange;
  margin-bottom: 20px;
`;

const MainPostLeft = () => {
  return (
    <>
      <RWDMainPostTitle>
        <MainPostLeftBox>
          <MainPostLeftText>玩家焦點</MainPostLeftText>
        </MainPostLeftBox>
      </RWDMainPostTitle>
      <MainPostLeftBox>{Slideshow()}</MainPostLeftBox>
    </>
  );
};

const MainPostMiddleBox = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 799px) {
    flex-direction: row;
    width: 97%;
    margin: 0 auto;
  }
`;

const MainPostMiddleText = styled.div`
  width: 80px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #ae2d53;
  margin-bottom: 20px;
`;

const Block = styled.div`
  display: none;
  width: 25px;

  @media screen and (max-width: 799px) {
    display: block;
  }
`;

const MainPostMiddle = () => {
  return (
    <>
      <RWDMainPostTitle>
        <MainPostMiddleBox>
          <MainPostMiddleText>精選特輯</MainPostMiddleText>
        </MainPostMiddleBox>
      </RWDMainPostTitle>
      <MainPostMiddleBox>
        <SlideShowMainPost
          height="215px"
          src={special01}
          fontSize="17px"
          label="手機遊戲"
          text="
    《天堂M》全新職業「死神」降臨！史上最強刺客職業、8月24日開放預先登錄"
          time="兩個月前"
        />
        <Block />
        <SlideShowMainPost
          height="215px"
          src={special02}
          fontSize="17px"
          label="手機遊戲"
          text="
    【攻略】RO仙境傳說新世代卡片鑲嵌屬性整理"
          time="兩周前"
        />
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
  background-color: #c2c2c2;
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

const MainPostRightDescribe = ({ label, text }) => {
  return (
    <MainPostRightDescribeBox>
      <MainPostRightDescribeTitle>{label}</MainPostRightDescribeTitle>
      <MainPostRightDescribeSubTitle>{text}</MainPostRightDescribeSubTitle>
    </MainPostRightDescribeBox>
  );
};

const MainPostRight = () => {
  return (
    <>
      <RWDMainPostTitle>
        <MainPostRightBox>
          <MainPostLeftText>最新資訊</MainPostLeftText>
        </MainPostRightBox>
      </RWDMainPostTitle>

      <MainPostRightBox>
        <MainPostRightText>
          <MainPostRightImg src={rightText01} />
          <MainPostRightDescribe
            label="三國系列遊戲"
            text="開荒攻略，越級打地的極限方法，你真的不看嗎"
          />
        </MainPostRightText>
        <MainPostRightText>
          <MainPostRightImg src={rightText02} />
          <MainPostRightDescribe
            label="三國系列遊戲"
            text="新賽季爆料④“天下爭鋒”預告：四季變化，秘策致勝"
          />
        </MainPostRightText>
        <MainPostRightText>
          <MainPostRightImg src={rightText03} />
          <MainPostRightDescribe
            label="三國系列遊戲"
            text="
          名將大盤點，開荒最優選，選誰開荒看完就懂了"
          />
        </MainPostRightText>
        <MainPostRightText>
          <MainPostRightImg src={rightText04} />
          <MainPostRightDescribe
            label="三國系列遊戲"
            text="
          五星武將之中各種武力之最是哪些？來看屬性盤點！"
          />
        </MainPostRightText>
      </MainPostRightBox>
    </>
  );
};

const PlayGameTiTleBox = styled.div`
  max-width: 1250px;
  margin: 30px auto;
  font-size: 20px;
  font-weight: 600;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
  }
  @media screen and (max-width: 799px) {
    max-width: 97%;
  }
`;

const PlayGameTiTle = () => {
  return (
    <PlayGameTiTleBox>
      <MainPostMiddleText>玩遊戲啦</MainPostMiddleText>
    </PlayGameTiTleBox>
  );
};

const PlayGamePostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
  }
  @media screen and (max-width: 799px) {
    max-width: 97%;
    justify-content: flex-start;
  }
`;

const PlayGamePostContent = styled.div`
  width: 18%;

  @media screen and (max-width: 800px) {
    width: 30%;
    margin: 0 auto 20px auto;
  }
`;
const PlayGamePostContentImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 140px;
  cursor: pointer;
`;

const PlayGamePostContentMainImg = styled.img`
  height: 100%;
`;

const PlayGamePostContentImg = ({ src }) => {
  return (
    <PlayGamePostContentImgBox>
      <PlayGamePostContentMainImg src={src} />
    </PlayGamePostContentImgBox>
  );
};

const PlayGamePostContentTitle = styled.div`
  margin-top: 15px;
  padding: 0 5px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    color: #ae2d53;
  }
`;

const PlayGamePostContentTime = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const PlayGamePostContentText = ({ text, time }) => {
  return (
    <>
      <PlayGamePostContentTitle>{text}</PlayGamePostContentTitle>
      <PlayGamePostContentTime>{time}</PlayGamePostContentTime>
    </>
  );
};

const PlayGamePost = () => {
  return (
    <PlayGamePostBox>
      <PlayGamePostContent>
        <PlayGamePostContentImg src={playGame01} />
        <PlayGamePostContentText
          text="《天堂M》全新職業「死神」降臨！史上最強刺客職業、8月24日開放預先登錄"
          time="兩周前"
        />
      </PlayGamePostContent>
      <PlayGamePostContent>
        <PlayGamePostContentImg src={playGame02} />
        <PlayGamePostContentText
          text="
          【攻略】RO仙境傳說新世代卡片鑲嵌屬性整理"
          time="兩周前"
        />
      </PlayGamePostContent>
      <PlayGamePostContent>
        <PlayGamePostContentImg src={playGame03} />
        <PlayGamePostContentText
          text="
          【RO新世代的誕生】平民最強刀騎養成攻略，二轉PVE最暴力刀騎士 "
          time="兩周前"
        />
      </PlayGamePostContent>
      <PlayGamePostContent>
        <PlayGamePostContentImg src={playGame04} />
        <PlayGamePostContentText
          text="《天諭手遊》萌新必知攻略匯總"
          time="兩周前"
        />
      </PlayGamePostContent>
      <PlayGamePostContent>
        <PlayGamePostContentImg src={playGame05} />
        <PlayGamePostContentText
          text="
          《三國志戰略版》全位置最強內政將名單與技能　S3必換戰法列表"
          time="兩周前"
        />
      </PlayGamePostContent>
    </PlayGamePostBox>
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
const ClassificationPostLeftContent = styled.div`
  width: 100%;
  border-top: 1px solid #7a7a7a;
  border-bottom: 1px solid #7a7a7a;
  box-sizing: border-box;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ClassificationPostLeftContentBox = styled.div`
  width: 48%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
`;

const ClassificationPostLeftContentTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #ae2d53;
`;

const ClassificationPostLeftContentMain = ({ label, text, time }) => {
  return (
    <MainPostRightDescribeBox style={{ width: "70%" }}>
      <MainPostRightDescribeTitle>{label}</MainPostRightDescribeTitle>
      <MainPostRightDescribeSubTitle>
        {`${text.substr(0, 20)}..`}
      </MainPostRightDescribeSubTitle>
      <MainPostRightDescribeSubTitle
        style={{ fontSize: "12px", cursor: "auto" }}
      >
        {time}
      </MainPostRightDescribeSubTitle>
    </MainPostRightDescribeBox>
  );
};

const ClassificationPostLeftMain = () => {
  return (
    <ClassificationPostLeftContentBox>
      <ClassificationPostLeftContentTitle>
        都市傳說
      </ClassificationPostLeftContentTitle>
      <SlideShowMainPost
        height="227px"
        src={cityTest01}
        fontSize="17px"
        label="都市傳說"
        text="「恐怖水缸」讓你跟鱷魚面對面　恐懼指數破表「敢挑戰的都是勇者」"
        time="三個月前"
      />
      <MainPostRightText>
        <MainPostRightImg width="100%" height="auto" src={cityTest02} />
        <ClassificationPostLeftContentMain
          label="都市傳說"
          text="【真相】這實驗將人變成冷血怪物！與神對話的都市傳說真相！"
          time="六個月前 ago"
        />
      </MainPostRightText>
      <MainPostRightText>
        <MainPostRightImg width="100%" height="auto" src={cityTest03} />
        <ClassificationPostLeftContentMain
          label="都市傳說"
          text="120萬人護送500噸黃金，為何黃金不翼而飛？尋找末代沙皇最後的遺產「曉涵哥來了」"
          time="三個月前 ago"
        />
      </MainPostRightText>
    </ClassificationPostLeftContentBox>
  );
};

const ClassificationPostRightMain = () => {
  return (
    <ClassificationPostLeftContentBox>
      <ClassificationPostLeftContentTitle>
        鄉民話題
      </ClassificationPostLeftContentTitle>
      <MainPostRightText>
        <MainPostRightImg width="100%" height="auto" src={villagersTest01} />
        <ClassificationPostLeftContentMain
          label="勵志語綠"
          text="如果你越來越累，越來越不想上班……"
          time="8小時前 ago"
        />
      </MainPostRightText>
      <MainPostRightText>
        <MainPostRightImg width="100%" height="auto" src={villagersTest02} />
        <ClassificationPostLeftContentMain
          label="勵志語綠"
          text="
          員工積極性不高？究竟是什麼原因，這10個誤區管理者須避免"
          time="8小時前 ago"
        />
      </MainPostRightText>
      <MainPostRightText>
        <MainPostRightImg width="100%" height="auto" src={villagersTest03} />
        <ClassificationPostLeftContentMain
          label="勵志語綠"
          text="
          一輩子要記住三句話，「看人長處、幫人難處、記人好處」。"
          time="1小時前 ago"
        />
      </MainPostRightText>
      <MainPostRightText>
        <MainPostRightImg width="100%" height="auto" src={villagersTest04} />
        <ClassificationPostLeftContentMain
          label="勵志語綠"
          text="
          蔡瀾：人絕對可以貌相！從「這幾類人臉上」就可以看出深淺好壞"
          time="4小時前 ago"
        />
      </MainPostRightText>
    </ClassificationPostLeftContentBox>
  );
};

const BoxBorder = styled.div`
  width: 100%;
  width: 100%;
  border-top: 1px solid #7a7a7a;
  border-bottom: 1px solid #7a7a7a;
  box-sizing: border-box;
  padding: 50px 0;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const ClassificationPostRight = styled.div`
  width: 30%;
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

const AnimeContent = () => {
  return (
    <BoxBorder>
      <ClassificationPostLeftContentTitle
        style={{ marginBottom: "30px", width: "102px" }}
      >
        動漫控樂園
      </ClassificationPostLeftContentTitle>
      <PlayGamePost />
    </BoxBorder>
  );
};

//以下是新的

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

export default function Home() {
  const { FetchFiveItem, fiveItemPost, FetchDate, post } = useHandleArticle();

  useEffect(() => {
    // FetchDate(TestURL);
    // FetchFiveItem(TestURL);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Announcement />
      <MainPostTitleThree />
      <MainPost>
        <MainPostLeft />
        <MainPostMiddle />
        <MainPostRight />
      </MainPost>
      <MainBox>
        <MainPostTitle style={{ width: "80px" }}>玩遊戲啦</MainPostTitle>
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
      {/* 以下是資訊欄 */}
      <ClassificationPost>
        <ClassificationPostLeftBox>
          <ClassificationPostLeftContent>
            <ClassificationPostLeftMain />
            <ClassificationPostRightMain />
          </ClassificationPostLeftContent>
          <ClassificationPostLeftContentTitle
            style={{ marginBottom: "30px", width: "120px" }}
          >
            三國志戰略迷
          </ClassificationPostLeftContentTitle>
          {ClassificationSlideshow()}
          <AnimeContent />
          <ClassificationPostLeftContent style={{ borderTop: "0" }}>
            <ClassificationPostLeftMain />
            <ClassificationPostRightMain />
          </ClassificationPostLeftContent>
          <AnimeContent />
          <ClassificationPostLeftContentTitle
            style={{ marginBottom: "30px", width: "120px" }}
          >
            三國志戰略迷
          </ClassificationPostLeftContentTitle>
          {ClassificationSlideshow()}
        </ClassificationPostLeftBox>
        <ClassificationPostRight>
          <ClassificationPostRightContent />
        </ClassificationPostRight>

        <MainLeftBox>
          <MainLeftNoBorderBox>
            <MainPostTitle style={{ width: "100px" }}>動漫控樂園</MainPostTitle>
          </MainLeftNoBorderBox>
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
        </MainLeftBox>
      </ClassificationPost>
      <ClassificationLinePostRWD />
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
