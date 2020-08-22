import React, {useContext, useEffect, useRef, useState} from 'react';
import {useHistory} from "react-router"
import styled, {css} from 'styled-components'
import {ReactComponent as CardRect} from '../assets/icons/card rect.svg'
import {ReactComponent as KycIcon} from "../assets/icons/kyc.svg";
import {ReactComponent as TimeIcon} from "../assets/icons/clock.svg";
import {ReactComponent as AgeIcon} from "../assets/icons/age-limit.svg";
import {device} from '../assets/device';
import {AuthContext} from "../firebase/Auth";
import {ReactComponent as DeleteButton} from "../assets/icons/delete.svg"
import {CARD_TYPES} from "../constants"
import {deleteDoc} from "../firebase/firebase";

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


const Image = styled.img`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
width: ${({width}) => width ? `${width}px` : "100%"};
height: ${({height}) => height ? `${height}px` : "40px"};
z-index: 10;
transform-origin: 50%;

`

export const Wrapper = styled.div`
width:280px;
height: 350px;
position: relative;
background-color: #fff;
box-shadow: 0 4px 25px -10px #1e8e81;
margin-bottom: 10rem;
transition: all .3s ease-in-out;
cursor: pointer;
text-decoration: none;
z-index: 999;

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

const InfoContainer = styled.div`

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
const StyledDeleteButton = styled(DeleteButton)`
width: 25px;
height: 25px;
position:absolute;
top:10px;
right:10px;
transition: all .4s ease-in-out;
z-index: 999;

&:hover {
cursor: pointer;
transform: scale(0.97);
path {
fill:#e94949 !important;

}
transition: all .4s ease-in-out;

}
`

const Warning = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -220%);
width:350px;
height: 150px;
background: #5BD6CA;
display: ${({warningActive}) => warningActive ? "flex" : "none"};
justify-content: center;
align-items: center;
z-index: 2000;
flex-direction: column;
font-size: 1.9rem;
box-shadow: 2px 4px 10px -9px #212121;
`
const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin-top: 2rem;
`

const DecisionBtn = styled.button`
background: ${({red}) => red ? "#b55656" : "#88f565"};
width:90px;
height: 36px;
border:none;
color:#fff;
font-size: 1.7rem;
transition: all .2s ease-in-out;

&:hover {
cursor: pointer;
background: ${({red}) => red ? "#c87e7e" : "#b7ff9f"};
}
`
const Card = ({price, name, logo, time, age, width, height, code, id, kyc, promoUrl, cardType}) => {
    const {currentUser} = useContext(AuthContext)
    const history = useHistory()
    const [copyValue, setCopyValue] = useState(code)
    const [warningActive, setWarningActive] = useState(false)
    const input = useRef(null)

    const copyToClipboard = (e) => {
        input.current.value = code
        input.current.select()
        document.execCommand('copy')
        e.target.focus();
        setCopyValue('Copied!')
    }


    return (


            <Wrapper onClick={
                cardType === CARD_TYPES.roulette ? () => (window.open(promoUrl, '_blank')) : () => history.push(`/${name}`)
            }>

                {currentUser && <StyledDeleteButton onClick={(e) => {
                    e.stopPropagation()
                    setWarningActive(true)
                }}/>}

                <Warning warningActive={warningActive}>
                    Are you sure to delete?
                    <ButtonsContainer>
                        <DecisionBtn onClick={(e) => {
                            e.stopPropagation()
                            deleteDoc("Cards", id)
                            setWarningActive(false)
                        }}>Yes</DecisionBtn>
                        <DecisionBtn red onClick={(e) => {
                            e.stopPropagation()
                            setWarningActive(false)
                        }}>No</DecisionBtn>
                    </ButtonsContainer>
                </Warning>
                <Price>{price}</Price>
                <Image width={width} height={height} src={logo} alt={name}/>
                <CardRect className="cardRect"/>

                {cardType === CARD_TYPES.roulette ? (
                    <Code>
                        <input type="text" value={copyValue} ref={input}/>
                        {
                            document.queryCommandSupported('copy') &&
                            <button onClick={copyToClipboard}>Copy</button>
                        }
                    </Code>
                ) : null}
                <InfoContainer>
                    {(kyc === "true") ? (<StyledKycIcon/>) : (null)}
                    <Time><TimeIcon/>{time}</Time>
                    {(age === "true") ? (<AgeIcon className="age"/>) : (null)}
                </InfoContainer>
            </Wrapper>
    )
}

export default Card;