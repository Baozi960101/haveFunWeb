import styled from "styled-components";
import { Link } from "react-router-dom";

const Goto = styled(Link)`
  text-decoration: none;
`;

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
          <Goto to="/">
            <FotterTitle style={{ letterSpacing: "0px" }}>
              Hinduhope
            </FotterTitle>
          </Goto>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Goto to="/boutiques">
              <FotterTitle>Boutiques</FotterTitle>
            </Goto>
            <Goto to="/vehicles">
              <FotterTitle>Vehicles</FotterTitle>
            </Goto>
            <Goto to="/worldnews">
              <FotterTitle>World News</FotterTitle>
            </Goto>
            <Goto to="/financialnews">
              <FotterTitle>Financial News</FotterTitle>
            </Goto>
          </div>
        </FooterBox>
      </Box>
    </>
  );
}
