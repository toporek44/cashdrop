import React from 'react';
import OfferDescription, {Logo, Desc, Banner,} from "../../components/OfferDescription";
import {CardRealMoney} from "../../assets/CardContent";
import img from "../../assets/img/brave_rewards.png";
import img1 from '../../assets/img/money.jpg'
import dollars from '../../assets/img/dollars.png'
import {ReactComponent as StepOne} from "../../assets/icons/one.svg";
import {ReactComponent as StepTwo} from "../../assets/icons/two.svg";
import {ReactComponent as StepThree} from "../../assets/icons/three.svg";
import Button from "../../components/Button";

const Brave = () => {
    return (
        <OfferDescription>
            <h1>About</h1>
            <Logo src={CardRealMoney[2].logo} alt={CardRealMoney[2].name}/>
            <Desc>
                <b>Load pages 3x to 6x faster, </b>
                 watch Brave in action, head-to-head-to-head against Chrome and Firefox. Brave loads pages three times
                as
                fast out of the box with nothing to install, learn or manage.</Desc>
            <Banner src={img} alt='main'/>
            <Desc>Your attention is valuable. Earn by viewing privacy-respecting ads and pay it forward to support
                content creators you love.
                With your old browser, you paid to browse the web by viewing ads with your valuable attention. You spent
                your valuable time downloading invasive ad technology that transmitted your precious private data to
                advertisers — without your consent.
            </Desc>
            <Desc>
                Today, Brave welcomes you to the new Internet. One where your time is valued, your personal data is kept
                private, and you actually get rewarded for your attention.</Desc>

            <Desc>You can fund your wallet with a currency of your choice or earn tokens by viewing ads you’re in
                control of.</Desc>
            <h1 className='h1_Secondary'>How do I create an account?</h1>
            <h2>Step by Step Instruction</h2>

            <StepOne/>
            <Desc center>Download the browser on your smartphone or Pc (Click the download button below)</Desc>
            <Button secondary><a rel="noreferrer noopener" target="_blank" href='https://brave.com/mac629'>Download</a></Button>

            <StepTwo/>
            <Desc center>Search for brave://rewards/ and make sure that Ads are turn on.</Desc>
            <Banner src={img1} alt="register"/>
            <Desc>Next go to https://creators.brave.com/ and create an account. To generate your referral link click add channel and paste your youtube channel link.  </Desc>
            <Desc>You don't need to have any published video for that.</Desc>

            <StepThree/>
            <Desc>Now you can promote it to your friends an earn to 7,5$ (depends of country you living) for every user who download the browser and will be using it!</Desc>
            <Banner src={dollars} alt='dollars'/>
        </OfferDescription>
    )
};

export default Brave;