import { useState, useEffect } from "react";
import styled from "styled-components";
import logoImg from "../../images/logo.jpg";
import menu from "../../images/menu.svg";
import downArrow from "../../images/downArrow.svg";
import close from "../../images/close.svg";
import upArrow from "../../images/upArrow.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
  margin: 40px 0;
  width: 120px;
  height: 120px;
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
  background-color: #ae2d53;
  font-size: 16px;
  color: white;
  font-weight: 600;

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

const HeaderArrow = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 7px;
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
  background-color: #ae2d53;
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

const DropDownBox = styled.div`
  width: 160%;
  max-height: 0px;
  overflow: hidden;
  background-color: #1d190b;
  position: absolute;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;

  ${(props) => props.$move && `max-height:300px`}
`;

const DropDownContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-size: 18px;
  color: white;
  letter-spacing: 1px;
`;

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [topBottomArise, setTopBottomArise] = useState(false);
  const [entertainmentDropDown, setEntertainmentDropDown] = useState(false);

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
    setShowMenu(!showMenu);
  }

  function handleDropDown() {
    setEntertainmentDropDown(!entertainmentDropDown);
  }

  return (
    <>
      <Goto to="/">
        <Top>
          <Logo src={logoImg} />
        </Top>
      </Goto>
      <HeaderBox>
        <HeaderContent>
          <Menu src={showMenu ? close : menu} onClick={menuChange} />
          <HeaderTitle>U.S havefun</HeaderTitle>
          <Goto
            to="/classification"
            style={{ position: "relative" }}
            onMouseOver={handleDropDown}
            onMouseOut={handleDropDown}
          >
            <HeaderTitle>
              星娛樂趣
              <HeaderArrow src={downArrow} />
            </HeaderTitle>
            <DropDownBox $move={entertainmentDropDown}>
              <Goto to="/classification">
                <DropDownContent>子標籤</DropDownContent>
              </Goto>
              <Goto>
                <DropDownContent>子標籤</DropDownContent>
              </Goto>
              <Goto>
                <DropDownContent>子標籤</DropDownContent>
              </Goto>
              <Goto>
                <DropDownContent>子標籤</DropDownContent>
              </Goto>
            </DropDownBox>
          </Goto>
          <HeaderTitle>
            看正妹趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
          <HeaderTitle>
            動漫卡趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
          <HeaderTitle>
            電競游趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
          <HeaderTitle>
            科技電趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
          <HeaderTitle>
            汽機車趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
          <HeaderTitle>
            話題知趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
          <HeaderTitle>
            搜奇怪趣 <HeaderArrow src={downArrow} />
          </HeaderTitle>
        </HeaderContent>
      </HeaderBox>
      <RWDMenu $move={showMenu}>星娛樂趣</RWDMenu>
      <RWDMenu $move={showMenu}>看正妹趣</RWDMenu>
      <RWDMenu $move={showMenu}>動漫卡趣</RWDMenu>
      <RWDMenu $move={showMenu}>電競游趣</RWDMenu>
      <RWDMenu $move={showMenu}>科技電趣</RWDMenu>
      <RWDMenu $move={showMenu}>汽機車趣</RWDMenu>
      <RWDMenu $move={showMenu}>話題知趣</RWDMenu>
      <RWDMenu $move={showMenu}>搜奇怪趣</RWDMenu>
      {topBottomArise && <TopBottom onClick={topFunction} src={upArrow} />}
    </>
  );
}
