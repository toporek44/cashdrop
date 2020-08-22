import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components'
import Hamburger from "./Hamburger";
import {device} from '../assets/device';
import {ReactComponent as RealMoney} from "../assets/icons/money.svg";
import {ReactComponent as Roulette} from "../assets/icons/roulette.svg";
import {ReactComponent as Airdrop} from "../assets/icons/airdrop.svg";
import {ReactComponent as Admin} from "../assets/icons/admin.svg";

import {AuthContext} from "../firebase/Auth";

const Wrapper = styled.div`
display:flex;
justify-content:center ;
align-items: center;
padding: 1rem 0;

.active{
color:#136c63;
}
`
const Navitem = styled.div`
display:none;
justify-content: center;
align-items: center;

@media ${device.laptop}{
display:flex;
}

svg{
width:40px;
height:40px;
margin:0 1rem 0 0;
}

`
const StyledNavLink = styled(NavLink)`
 font-weight: 300;
 font-size: 2rem;
 text-decoration: none;
 color: #fff;
 margin: 0 6rem 0 0;
`

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)


    return (
        <Wrapper>
            <Hamburger/>

            <Navitem>
                <RealMoney/>
                <StyledNavLink
                    to='/'
                    exact
                    activeClassName='active'
                >
                    Real Money
                </StyledNavLink>
            </Navitem>
            <Navitem>
                <Roulette/><StyledNavLink to='/Roulettes' activeClassName='active'>Roulettes</StyledNavLink>
            </Navitem>
            <Navitem>
                <Airdrop /><StyledNavLink to='/Airdrops' activeClassName='active'>Airdrops</StyledNavLink>
            </Navitem>
            <Navitem>
                <Admin />{currentUser && (<StyledNavLink to="/Admin" activeClassName="active" >Admin</StyledNavLink>)}
            </Navitem>
        </Wrapper>
    );

}

export default Navbar;