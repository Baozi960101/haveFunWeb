import styled from "styled-components";
import { Link } from "react-router-dom";

const Goto = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MainPostTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #f18b23;
`;

const ClassificationArticleBox = styled.div`
  width: 32%;
  height: 300px;
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    width: 47%;
    margin: 0 auto 20px auto;
  }
`;

const ClassificationArticleImgBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ClassificationArticleImg = styled.img`
  width: 100%;
`;

const ClassificationArticleTitle = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
`;

const ClassificationArticleTime = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;

export const ClassificationArticle = ({ to, src, title, time }) => {
  return (
    <>
      <ClassificationArticleBox>
        <Goto to={`/${to}`}>
          <ClassificationArticleImgBox>
            <ClassificationArticleImg alt="news" src={src} />
          </ClassificationArticleImgBox>
        </Goto>
        <Goto to={`/${to}`}>
          <ClassificationArticleTitle>{title}</ClassificationArticleTitle>
        </Goto>
        <ClassificationArticleTime>{time}</ClassificationArticleTime>
      </ClassificationArticleBox>
    </>
  );
};

//以上都是獨立的頁面Po文

const BigBulletinBoardBox = styled.div`
  width: 18%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 auto 20px auto;
  }
`;

const BigBulletinBoardImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 140px;
  cursor: pointer;

  @media screen and (max-width: 799px) {
    height: 300px;
  }
`;

const BigBulletinBoardImg = styled.img`
  width: 100%;
`;

const BigBulletinBoardTitle = styled.div`
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

const BigBulletinBoardTime = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

export const BigBulletinBoard = ({ to, src, title, time }) => {
  return (
    <>
      <BigBulletinBoardBox>
        <Goto to={`/${to}`}>
          <BigBulletinBoardImgBox>
            <BigBulletinBoardImg alt="news" src={src} />
          </BigBulletinBoardImgBox>
        </Goto>
        <Goto to={`/${to}`}>
          <BigBulletinBoardTitle>{title}</BigBulletinBoardTitle>
        </Goto>
        <BigBulletinBoardTime>{time}</BigBulletinBoardTime>
      </BigBulletinBoardBox>
    </>
  );
};
