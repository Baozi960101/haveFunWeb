import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cover1Img from "../../images/cover.png";
import cover2Img from "../../images/cover2.png";
import cover3Img from "../../images/cover3.png";
import classificationSlideshow01 from "../../images/classificationSlideshow01.jpg";
import classificationSlideshow02 from "../../images/classificationSlideshow02.jpg";
import classificationSlideshow03 from "../../images/classificationSlideshow03.jpg";

const SlideshowBox = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const CoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

const Cover = styled.img`
  height: 100%;
`;

const CoverImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 20px;
  color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 2% 2% 2% 5%;
  background-color: hsla(240, 0%, 50%, 0.3);
  box-sizing: border-box;
`;

const CoverImgLabel = styled.div`
  background-color: orange;
  font-size: 14px;
  font-weight: 500;
  max-width: 100px;
  text-align: center;
  margin-bottom: 10px;
`;

const CoverImgTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 10px;
`;

const CoverImgTime = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 80px;
`;

export const SlideShowMainPost = ({
  height,
  src,
  fontSize,
  label,
  text,
  time,
}) => {
  return (
    <CoverBox style={{ height: height }}>
      <Cover src={src} />
      <CoverImgBox>
        <CoverImgLabel>{label}</CoverImgLabel>
        <CoverImgTitle style={{ fontSize: fontSize }}>{text}</CoverImgTitle>
        <CoverImgTime>{time}</CoverImgTime>
      </CoverImgBox>
    </CoverBox>
  );
};

export function Slideshow() {
  const fadeProperties = {
    duration: 1500,
    canSwipe: false,
    //改為Ture
    autoplay: false,
    //改為Ture
    transitionDuration: 800,
    infinite: true,
    arrows: false,
  };

  return (
    <SlideshowBox>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-slide">
            <SlideShowMainPost
              height="450px"
              src={cover2Img}
              fontSize="30px"
              label="手機遊戲"
              text="明日方舟远程群伤重装，五星干员——灰毫"
              time="兩周前"
            />
          </div>
          <div className="each-slide">
            <SlideShowMainPost
              height="450px"
              src={cover1Img}
              fontSize="30px"
              label="手機遊戲"
              text="明日方舟主角登場，天命勇者"
              time="兩周前"
            />
          </div>
          <div className="each-slide">
            <SlideShowMainPost
              height="450px"
              src={cover3Img}
              fontSize="30px"
              label="手機遊戲"
              text="明日方舟专坑雪雉的奸商，安息处的怪盗——卡达"
              time="兩周前"
            />
          </div>
        </Slide>
      </div>
    </SlideshowBox>
  );
}

export function ClassificationSlideshow() {
  const fadeProperties = {
    duration: 1500,
    canSwipe: false,
    //改為Ture
    autoplay: false,
    //改為Ture
    transitionDuration: 800,
    infinite: true,
    arrows: false,
  };

  return (
    <SlideshowBox>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-slide">
            <SlideShowMainPost
              height="450px"
              src={classificationSlideshow01}
              fontSize="30px"
              label="三國志戰略版"
              text="「三國志戰略版」S4賽季第六天丨關口再開 不要再發生官方意外啦！"
              time="2小時前"
            />
          </div>
          <div className="each-slide">
            <SlideShowMainPost
              height="450px"
              src={classificationSlideshow02}
              fontSize="30px"
              label="三國志戰略版"
              text="收假啦!該收收心啦!~三國志戰略版"
              time="2天前"
            />
          </div>
          <div className="each-slide">
            <SlideShowMainPost
              height="450px"
              src={classificationSlideshow03}
              fontSize="30px"
              label="三國志戰略版"
              text="三國志戰略版-S3開荒攻略心得-碰瓷＆爆倉＆戰法點|雨果大師打電動"
              time="6天前"
            />
          </div>
        </Slide>
      </div>
    </SlideshowBox>
  );
}
