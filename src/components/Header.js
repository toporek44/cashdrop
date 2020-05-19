import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { device } from "../assets/device";
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from "../assets/icons/logo.svg";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 160px;
    height: 50px;
    cursor: pointer;

    @media ${device.mobileL} {
      width: 250px;
      height: 75px;
    }
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const StyledLogo = styled(Logo)`
height: 60px;  
width: 180px;

@media ${device.tablet}{
height: 75px;  
width: 250px;

}
`;
const Header = ()=> {
  return (
    <Wrapper>
      <StyledNavLink to="/"><StyledLogo/></StyledNavLink>
      <Navbar />
    </Wrapper>
  );
};

export default Header;
