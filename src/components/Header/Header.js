import { useState, useEffect } from "react";
import styled from "styled-components";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import upArrow from "../../images/upArrow.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HinduHopeLongLogo from "../../images/HinduHopeLongLogo.svg";

const Goto = styled(Link)`
  text-decoration: none;
`;

const Top = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (min-width: 770px) and (max-width: 1100px) {
    max-width: 800px;
  }
`;

const Logo = styled.img`
  margin: 20px 0;
  width: 180px;
  height: 80px;
  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: #f18b23;
  font-size: 16px;
  color: white;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 5;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    font-size: 14px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  box-sizing: border-box;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Menu = styled.img`
  width: 25px;
  height: 25px;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const RWDMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0px;
  background-color: #ae2d53;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  font-size: 18px;
  color: white;
  font-weight: 600;
  box-sizing: border-box;
  letter-spacing: 1px;
  padding-left: 60px;
  padding-right: 20px;
  cursor: pointer;

  :hover {
    color: #cbbb7c;
  }

  ${(props) => props.$move && `height:50px`}
`;

const TopBottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 3;
  background-color: #f18b23;
  border-radius: 5px;
`;

const TopBottomImg = styled.img`
  width: 30px;
  height: 30px;
`;
const TopBottom = ({ onClick }) => {
  return (
    <TopBottomBox onClick={onClick}>
      <TopBottomImg src={upArrow} />
    </TopBottomBox>
  );
};

function scrollFunction(setTopBottomArise) {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    setTopBottomArise(true);
  } else {
    setTopBottomArise(false);
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [topBottomArise, setTopBottomArise] = useState(false);

  let location = useLocation();

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction(setTopBottomArise);
    };
  }, []);

  useEffect(() => {
    topFunction();
  }, [location]);

  function menuChange() {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  return (
    <>
      <Goto to="/">
        <Top>
          <Logo src={HinduHopeLongLogo} />
        </Top>
      </Goto>
      <HeaderBox>
        <HeaderContent>
          <Menu src={showMenu ? close : menu} onClick={menuChange} />
          <HeaderTitle>Hinduhope</HeaderTitle>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Goto to="/boutiques">
              <HeaderTitle>Boutiques</HeaderTitle>
            </Goto>
            <Goto to="/vehicles">
              <HeaderTitle>Vehicles</HeaderTitle>
            </Goto>
            <Goto to="/worldnews">
              <HeaderTitle>World News</HeaderTitle>
            </Goto>
            <Goto to="/financialnews">
              <HeaderTitle>Financial News</HeaderTitle>
            </Goto>
          </div>
        </HeaderContent>
      </HeaderBox>
      <RWDMenu $move={showMenu}>Boutiques</RWDMenu>
      <RWDMenu $move={showMenu}>Vehicles</RWDMenu>
      <RWDMenu $move={showMenu}>World News</RWDMenu>
      <RWDMenu $move={showMenu}>Financial News</RWDMenu>
      {topBottomArise && <TopBottom onClick={topFunction} src={upArrow} />}
    </>
  );
}
