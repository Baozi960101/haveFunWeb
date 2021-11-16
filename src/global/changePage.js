import styled from "styled-components";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";

const PageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3%;
  margin-top: 40px;
  box-sizing: border-box;
  font-size: 23px;
`;

const PrevButton = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
  cursor: pointer;
`;

const NextButton = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 30px;
  cursor: pointer;
`;

export const ChangePageButton = ({ changePrevPage, changeNextPage, page }) => {
  return (
    <PageBox>
      <PrevButton onClick={changePrevPage} src={leftArrow} />
      {page}
      <NextButton onClick={changeNextPage} src={rightArrow} />
    </PageBox>
  );
};
