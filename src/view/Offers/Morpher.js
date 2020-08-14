import React from 'react';
import OfferDescription, {Banner, Desc, Logo} from "../../components/OfferDescription";
import {CardAirdrops} from "../../assets/CardContent";
import {ReactComponent as StepOne} from "../../assets/icons/one.svg";
import Button from "../../components/Button";
import {ReactComponent as StepTwo} from "../../assets/icons/two.svg";
import img from "../../assets/img/instruction morpger.jpg";
import {ReactComponent as StepThree} from "../../assets/icons/three.svg";
import {ReactComponent as StepFour} from "../../assets/icons/four.svg";
import dollars from "../../assets/img/dollars.png";

const Morpher = () => {
    return (
        <OfferDescription>
            <h1>About</h1>
            <Logo src={CardAirdrops[0].logo} alt={CardAirdrops[0].name}/>
            <Desc>Morpher is a trading platform and a market protocol built on the Ethereum blockchain. We
                virtualize investing by rebuilding the financial markets from the ground up on the blockchain. This
                enables trading a wide universe of assets 24/7, with infinite liquidity, and zero fees. Morpher is the
                first platform that does not require counterparties, middlemen, or any custodians to facilitate trading.
                More importantly our mission is to democratize investing by making it available to everyone at zero
                cost.</Desc>
            <h1 className='h1_Secondary'>How do I create an account?</h1>
            <h2>Step by Step Instruction</h2>

            <StepOne/>
            <Desc center>Click the button below to create an account.</Desc>
            <Button secondary><a rel="noreferrer noopener" target="_blank" href='https://www.morpher.com/invite/maciejt909'>Create Account</a></Button>

            <StepTwo/>
            <Desc center>Fill up form with your personal information.</Desc>

            <StepThree/>
            <Desc center>Finish KYC verification.</Desc>
            <Desc>That's it! Your 30$ bonus (1000 tokens) will be add to your account when the stock exchange will be open on 30.04.2020. </Desc>
            <Banner src={img} alt="instruction"/>
            <StepFour/>
            <Desc>Now you can recommend promotion farther and earn 500 tokens value around 15$ for each referral, who
                will do the above conditions. Enjoy!</Desc>
            <Banner src={dollars} alt='dollars'/>
        </OfferDescription>
    );
};

export default Morpher;