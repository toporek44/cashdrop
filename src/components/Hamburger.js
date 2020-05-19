import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {device} from '../assets/device';
import RealMoney from "../assets/icons/money.svg";
import Roulettes from "../assets/icons/roulette.svg";
import Airdrops from "../assets/icons/airdrop.svg";


const HambItem = () => `
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    height: 3px;
    width: 28px;
    z-index:999;
`;

const HamburgerWrapper = styled.div`
  .hamburgerWrapper {
    padding: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    display: inline-block;
    z-index: 999;
    
    @media ${device.laptop}{
display:none;
}
    
    &:focus{
    outline: none;
    }
  }

//Middle Hamburger Item
  .hamburgerItem {
    ${HambItem};
    transition: all 0.3s 0.2s ease-in;

    &Active {
      ${HambItem};
      z-index: 999;
      width: 0;

//Hamburger \ Item 
      ::before {
        ${HambItem};

        content: "";
        width: 37px;
        transform-origin: center;
        background-color: #2EC4B6;
        transform: translateY(-12px);
        transform: rotate(45deg);
        transition: transform 0.3s 0.2s ease-out;
      }

// Hamburger Item /
      ::after {
        ${HambItem};

        content: "";
        width: 37px;
        transform-origin: center;
        background-color: #2EC4B6;
        transform: translateY(8px);
        transform: rotate(-45deg);
        transition: transform 0.3s 0.2s ease-out;
      }
    }

//Upper Hamburger Item

    ::before {
      ${HambItem};

      content: "";
      width: 37px;
      transform: translate(0, -13px);
      transition: transform 0.3s 0.2s ease-in;
    }
//Lower Hamburger Item

    ::after {
      ${HambItem};

      content: "";
      width: 37px;
      transform: translate(0, 10px);
      transition: transform 0.3s 0.2s ease-in;
    }
  }
`;
const Sidebar = () => `
width: 250px;
height: 100vh;
background-color: #fff;
position: fixed;
top: 0;
right: 0;
transition: transform 0.3s 0.2s ease-in-out;
box-shadow: 0 0 16px -10px #000;
z-index:990;
`;
const SidebarStyles = styled.div`
  .sidebar {
    ${Sidebar};
    transform: translateX(250px);
  }
  .sidebarActive {
    ${Sidebar};
    transform: translateX(0px);
  }

  .sidebarList {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 10rem 0 0 0;
    padding: 0;
  }

  .sidebarItem {
    display:flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    font-size: 1.3em;
    color: black;
    font-weight: 500;
    margin:0 0 1.4rem 0;
    padding:1rem 2rem;
    
    img{
    width: 75px;
    height: 50px;
    }
    
    &--active {
      background-color: rgba(236, 236, 236, 0.76);
    }

    &:hover {
      background-color: rgba(236, 236, 236, 0.76);
    }
    
   

    svg{
    width:40px;
    height:40px;
    margin:0 1rem 0 0;
    }

  }
`;

const StyledNavlink = styled(NavLink)`
   margin:0;
    color:#2EC4B6;
    height: 100%;
    width:100%;
    border:none;
    text-decoration: none;
    height: 100%;
    display: flex;
   
   div{
      color:#2EC4B6;

   }
   &.activeLink{
    div{
        color:#136c63;

    }
}
`


const Hamburger = () =>{
    const [hamburgerActive, setHamburgerState] = useState(false);
    const pageNames = ["Real Money","Roulettes","Airdrops"];

    return (
        <HamburgerWrapper>
            <button
                onClick={() => setHamburgerState(!hamburgerActive)}
                className="hamburgerWrapper"
            >
                <div
                    className={
                        hamburgerActive ? "hamburgerItemActive" : "hamburgerItem"
                    }
                />
            </button>
            <SidebarStyles>
                <div className={hamburgerActive ? "sidebarActive" : "sidebar"}>
                    <ul className="sidebarList">
                        {pageNames.map((name)=> (


                            <StyledNavlink to={name==="Real Money"? ('/') :(`/${name}`)} activeClassName='activeLink' exact>
                                    <li key={name} onClick={()=>setHamburgerState(!hamburgerActive)} className="sidebarItem">
                                        <img src={name==="Real Money" ? RealMoney : name==="Airdrops" ? Airdrops : name === "Roulettes" ? Roulettes : null}  alt=""/>
                                  <div>{name}</div>
                            </li>
                            </StyledNavlink>

                        ))}
                    </ul>
                </div>
            </SidebarStyles>
        </HamburgerWrapper>

    );
}

export default Hamburger;


