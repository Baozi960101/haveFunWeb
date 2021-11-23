import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const Goto = styled(Link)`
  text-decoration: none;
`;

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
  to,
  height,
  src,
  fontSize,
  label,
  text,
  time,
}) => {
  return (
    <Goto to={`${to}`}>
      <CoverBox style={{ height: height }}>
        <Cover src={src} />
        <CoverImgBox>
          <CoverImgLabel>{label}</CoverImgLabel>
          <CoverImgTitle style={{ fontSize: fontSize }}>{text}</CoverImgTitle>
          <CoverImgTime>{time}</CoverImgTime>
        </CoverImgBox>
      </CoverBox>
    </Goto>
  );
};

export const Slideshow = ({ content }) => {
  const fadeProperties = {
    duration: 1500,
    canSwipe: true,
    //改為Ture
    autoplay: true,
    //改為Ture
    transitionDuration: 800,
    infinite: true,
    arrows: false,
  };

  return (
    <SlideshowBox>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          {content.map((data) => {
            return (
              <>
                <div className="each-slide">
                  <SlideShowMainPost
                    key={data.crawler_No}
                    to={data.crawler_No}
                    height="450px"
                    src={data.crawler_PicUrl}
                    fontSize="30px"
                    label={`${data.crawler_Keyword.substring(0, 6)}...`}
                    text={`${data.crawler_Title.substring(0, 25)}...`}
                    time={data.crawler_Date}
                  />
                </div>
              </>
            );
          })}
        </Slide>
      </div>
    </SlideshowBox>
  );
};

export const ClassificationSlideshow = ({ content }) => {
  const fadeProperties = {
    duration: 1500,
    canSwipe: true,
    //改為Ture
    autoplay: true,
    //改為Ture
    transitionDuration: 800,
    infinite: true,
    arrows: false,
  };

  return (
    <SlideshowBox>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          {content.map((data) => {
            return (
              <>
                <div className="each-slide">
                  <SlideShowMainPost
                    key={data.crawler_No}
                    to={data.crawler_No}
                    height="450px"
                    src={data.crawler_PicUrl}
                    fontSize="30px"
                    label={`${data.crawler_Keyword.substring(0, 6)}...`}
                    text={`${data.crawler_Title.substring(0, 25)}...`}
                    time={data.crawler_Date}
                  />
                </div>
              </>
            );
          })}
        </Slide>
      </div>
    </SlideshowBox>
  );
};
