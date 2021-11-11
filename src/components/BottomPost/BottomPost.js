import styled from "styled-components";
import playGame01 from "../../images/playGame01.jpeg";
import playGame02 from "../../images/playGame02.jfif";
import playGame03 from "../../images/playGame03.webp";
import playGame04 from "../../images/playGame04.jpg";
import playGame05 from "../../images/playGame05.jpg";

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
    width: 100%;
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

const ClassificationPostLeftContentTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #ae2d53;
`;

const BottomPostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1250px;
  margin: 70px auto;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    max-width: 800px;
  }
  @media screen and (max-width: 799px) {
    max-width: 97%;
  }
`;

const BottomMainPost = () => {
  return (
    <>
      <BottomPostBox>
        <ClassificationPostLeftContentTitle
          style={{ marginBottom: "30px", width: "140px" }}
        >
          你可能會有興趣
        </ClassificationPostLeftContentTitle>
        <PlayGamePost />
      </BottomPostBox>
    </>
  );
};

export default function BottomPost() {
  return (
    <>
      <BottomMainPost />
    </>
  );
}
