import styled from "styled-components";
import lineTest from "../images/lineTest.jpg";
import line from "../images/Line.jpg";

const ClassificationPostLeftContentTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  padding-bottom: 7px;
  border-bottom: 3.5px solid #ae2d53;
  margin-left: 5%;
`;

const ClassificationPostRightLine = styled.img`
  width: 90%;
  margin: 0 5% 40px 5%;
  cursor: pointer;
`;

const ClassificationPostLeftContentText = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 90%;
  padding: 0px 5%;
`;

export const ClassificationPostRightContent = () => {
  return (
    <>
      <ClassificationPostLeftContentTitle
        style={{ marginBottom: "30px", color: "red", width: "120px" }}
      >
        加入哈企鵝群
      </ClassificationPostLeftContentTitle>
      <ClassificationPostRightLine alt="Line" src={lineTest} />
      {/* line */}
      <ClassificationPostLeftContentText>
        「husky」這個詞的起源是一群住在北極的愛斯基摩人（又名因紐特人）。是因為英國商船的水手給"Eskimos"稱為「Huskimos」又簡稱為「哈士奇」。而愛斯基摩人飼養哈士奇的紀錄最早是從1852年才開始記載。
      </ClassificationPostLeftContentText>
      <ClassificationPostLeftContentText
        style={{ marginTop: "30px", color: "blue" }}
      >
        哈企鵝敲口愛~~~
      </ClassificationPostLeftContentText>
    </>
  );
};

const ClassificationLinePostRWDBox = styled.div`
  margin-bottom: 60px;
  width: 90%;
  margin: 50px 5% 50px 5%;
  box-sizing: border-box;
  display: none;

  @media screen and (max-width: 799px) {
    display: block;
  }
`;

export const ClassificationLinePostRWD = () => {
  return (
    <>
      <ClassificationLinePostRWDBox>
        <ClassificationPostRightContent />
      </ClassificationLinePostRWDBox>
    </>
  );
};
