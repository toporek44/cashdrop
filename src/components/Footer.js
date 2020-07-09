import React from 'react';
import styled from 'styled-components'
import {ReactComponent as Logo} from '../assets/icons/logo-drop.svg'

const Wrapper = styled.div`
//position: relative;
//bottom: 0;
height: 80px;
width: 100%;
border-top: 2px solid #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 15rem;


.gambling-info{
font-size: 1.2rem;
font-weight: 300;
margin-top: 1rem;
text-align: center;
padding: 0 1rem;
}
`

const StyledLogo = styled(Logo)`
width:20px;
height: 20px;
`
const Footer = () => {
    return (
        <Wrapper>
            <div><StyledLogo/>CashDrop All rights reserved ©</div>
            <div className='gambling-info'>CashDrop.com is not responsible for our visitors money and don't recommend gambling!</div>
        </Wrapper>
    );
};

export default Footer;