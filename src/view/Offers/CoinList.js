import React from 'react';
import OfferDescription, {Banner, Desc, Logo} from "../../components/OfferDescription";
import {CardRealMoney} from "../../assets/CardContent";
import {ReactComponent as StepOne} from "../../assets/icons/one.svg";
import Button from "../../components/Button";
import {ReactComponent as StepTwo} from "../../assets/icons/two.svg";
import img from "../../assets/img/coinlist.png";
import {ReactComponent as StepThree} from "../../assets/icons/three.svg";
import {ReactComponent as StepFour} from "../../assets/icons/four.svg";
import dollars from "../../assets/img/dollars.png";

const CoinList = () => {
    return (
        <OfferDescription>
            <h1>About</h1>
            <Logo src={CardRealMoney[3].logo} alt={CardRealMoney[3].name}/>
            <Desc center>CoinList is where early adopters invest in and trade the best digital assets.</Desc>
            <h1 className='h1_Secondary'>How do I create an account?</h1>
            <h2>Step by Step Instruction</h2>

            <StepOne/>
            <Desc center>Click the button below to create an account. <b>Warning: limited time promotion, first 10000
                new users get bonus.</b></Desc>
            <Button secondary><a rel="noreferrer noopener" target="_blank" href='https://coinlist.co/clt?referral_code=E663Z2'>Create Account</a></Button>

            <StepTwo/>
            <Desc center>Verify your personal information by KYC e.g. Driver Licence</Desc>
            <Banner src={img} alt="register"/>

            <StepThree/>
            <Desc>Make a 10$ deposit by Cryptocurrency or by Bank transfer e.g. with Revolut or N26.</Desc>
            <Desc>After deposit, make a buy and sale any crypto e.g. Bitcoin. You can stop it when sum turnover take
                away $100 ( for first 30 days, we don’t pay transaction commission.)</Desc>
            <Desc><b>Now you get 0,0015 BTC it is around $10.</b></Desc>
            <Desc>Additionally every new users have participates in the draw, where main win is 1 BTC!</Desc>
            <StepFour/>
            <Desc>Now you can recommend promotion farther and earn  0,0015 BTC value around $10 for each referral, who will do the above conditions. Enjoy!</Desc>
            <Banner src={dollars} alt='dollars'/>
        </OfferDescription>
    );
};

export default CoinList;