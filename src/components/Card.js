import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components'
import {ReactComponent as CardRect} from '../assets/icons/card rect.svg'
import {ReactComponent as KycIcon} from "../assets/icons/kyc.svg";
import {ReactComponent as TimeIcon} from "../assets/icons/clock.svg";
import {ReactComponent as AgeIcon} from "../assets/icons/age-limit.svg";
import {device} from '../assets/device';
import {Link} from "react-router-dom";
import Button from "./Button";
export const CardWrapper = styled.div`
position: relative;
left:50%;
transform: translateX(-50%);
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;

@media ${device.tablet}{
flex-direction: row;
width:80%;
}
`

const styles = css`
width:280px;
height: 350px;
background-color: #fff;
position: relative;
box-shadow: 0 4px 25px -10px #1e8e81;
margin-bottom: 10rem;
transition: all .3s ease-in-out;
cursor: pointer;
text-decoration: none;


&:hover{
transform: scale(1.05);
transition: all .3s ease-in-out;
}

@media ${device.tablet}{
margin:3rem 2rem;

}

.cardRect{
width:100%;
position: absolute;
bottom: 0;
height: 216px;
}
img{
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
width:100%;
height: 40px;
z-index: 10;
transform-origin: 50%;
}
`;

export const Wrapper = styled.div`
${styles}
`
const StyledLink = styled(Link)`
${styles}
`

const Price = styled.div`
font-size: 5rem;
text-align: center;
padding: 4rem 0 4rem 0;
color:#5BD6CA;

@media ${device.tablet}{
font-size:6rem;
}
`
const StyledKycIcon = styled(KycIcon)`
position: relative;
bottom: 0;

width:60px;
height: 50px;
z-index: 1000;
`

const Infocontainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
position:absolute;
bottom: 0;
width:100%;
height: 60px;
padding: 0 1rem;



.age{
  width:40px;
height: 40px ;
margin-left: 2rem;
}


`

const Time = styled.div`
display: flex;
align-items: center;
font-size: 1.7rem;
margin-left: 2rem;
color:black;
svg{
width:35px;
height: 35px ;
margin-right: 1rem;
}
`

const Code = styled.div`
display: flex;
font-size: 1.6rem;
font-weight: 700;
height: 20px;
width:100%;
text-align: center;
position: absolute;
bottom: 0;
transform: translateY(-65px);
justify-content: center;
align-items: center;
z-index: 999;

input[type="text"]{
background: transparent;
border:2px solid #fff;
color:#fff;
height: 28px;
padding: 1rem 1rem;
width: 150px;
margin-right: .6rem;
font-weight: 700;
text-align: center;
border-radius: 5px;

}

button{
background-color: transparent;
width:65px;
height: 28px;
border:2px solid #fff;
color:#fff;
cursor: pointer;
font-weight: 700;
border-radius: 5px;

&:hover{
background-color: #fff;
color:#5BD6CA;

}
}
`


const Card = ({price, name, logo, time, age, width, height, code, pageType, kyc, promoUrl, cardType}) => {
    const [copyValue, setCopyValue] = useState(code)
    const input = useRef(null)
    const copyToClipboard = (e) => {
        input.current.value = code
        input.current.select()
        document.execCommand('copy')
        e.target.focus();
        setCopyValue('Copied!')
    }

    const Component = pageType? StyledLink : Wrapper;
    return (

        <>
            {cardType==="CardRoulettes" ?
                (
                    <Wrapper onClick={() => (window.open(promoUrl, '_blank'))} >
                        {/*{*/}
                        {/*    (cardType==="CardRoulettes") ?*/}
                        {/*    (<Button onClick={() => (window.open(promoUrl, '_blank'))}>take it</Button>) :*/}
                        {/*    ( <Button as={Link} to={`/${name}`}>take it</Button>)*/}
                        {/*}*/}

                        <Price>{price}</Price>
                        <img style={{width: width, height: height}} src={logo} alt={name}/>
                        <CardRect className="cardRect"/>

                        {cardType==="CardRoulettes"? (
                            <Code>
                                <input type="text" value={copyValue}  ref={input}/>
                                {
                                    document.queryCommandSupported('copy') &&
                                    <button onClick={copyToClipboard}>Copy</button>
                                }
                            </Code>
                        ) : (
                            null
                        )}
                        <Infocontainer>
                            {(kyc==="true") ? (<StyledKycIcon/>) : (null)}
                            <Time><TimeIcon/>{time}</Time>
                            {(age==="true") ? (<AgeIcon className="age"/>) : (null)}
                        </Infocontainer>
                    </Wrapper>
                )
                :
                (
                    <Wrapper as={Link} to={`/${name}`}>
                        {/*{cardType==="CardRoulettes" ?*/}
                        {/*    (<Button onClick={() => (window.open(promoUrl, '_blank'))}>take it</Button>) :*/}
                        {/*    ( <Button as={Link} to={`/${name}`}>take it</Button>)}*/}

                        <Price>{price}</Price>
                        <img style={{width: width, height: height}} src={logo} alt={name}/>
                        <CardRect className="cardRect"/>


                        <Infocontainer>
                            {(kyc==="true") ? (<StyledKycIcon/>) : (null)}
                            <Time><TimeIcon/>{time}</Time>
                            {(age==="true") ? (<AgeIcon className="age"/>) : (null)}
                        </Infocontainer>
                    </Wrapper>
                )}

        </>
    )
}

export default Card;