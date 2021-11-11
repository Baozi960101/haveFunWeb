import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  background-color: #54595f;
  box-sizing: border-box;
`;

const FooterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1250px;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;

const FotterTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0 10px;

  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }
`;

export default function Fotter() {
  return (
    <>
      <Box>
        <FooterBox>
          <FotterTitle style={{ letterSpacing: "0px" }}>
            U.S havefun
          </FotterTitle>
          <FotterTitle>看正妹趣</FotterTitle>
          <FotterTitle>動漫卡趣</FotterTitle>
          <FotterTitle>電競游趣</FotterTitle>
          <FotterTitle>科技電趣</FotterTitle>
          <FotterTitle>汽機車趣</FotterTitle>
          <FotterTitle>話題知趣</FotterTitle>
          <FotterTitle>搜奇怪趣</FotterTitle>
        </FooterBox>
      </Box>
    </>
  );
}
