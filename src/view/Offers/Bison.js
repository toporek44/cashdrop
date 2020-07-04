import React from 'react';
import OfferDescription, {Logo, Desc, Banner,} from "../../components/OfferDescription";
import {CardRealMoney} from "../../assets/CardContent";
import img from "../../assets/img/bison.png";
import img1 from '../../assets/img/bison logi.jpeg'
import img2 from '../../assets/img/50euro.jpeg'
import img3 from '../../assets/img/dashboard bison.png'
import dollars from '../../assets/img/dollars.png'
import {ReactComponent as StepOne} from "../../assets/icons/one.svg";
import {ReactComponent as StepTwo} from "../../assets/icons/two.svg";
import {ReactComponent as StepThree} from "../../assets/icons/three.svg";
import {ReactComponent as StepFour} from "../../assets/icons/four.svg";
import Button from "../../components/Button";

const Bison = () => {
    return (
        <OfferDescription>
            <h1>About</h1>
            <Logo src={CardRealMoney[1].logo} alt={CardRealMoney[1].name}/>
            <Desc>BISON shows you the beauty of the crypto world without any complicated processes. You can buy and sell
                Bitcoin & Co. instantly and effortlessly, while also keeping up with social media buzz. With BISON
                you’ll stay on top of your investments and be informed about the conditions of the crypto market.</Desc>
            <Desc>BISON’s Cryptoradar analyses real-time data and provides a market sentiment of the most discussed
                cryptocurrencies. Instantly see what’s hot and what’s not, without having to read thousands of tweets or
                search through online news.</Desc>


            <Banner src={img} alt='main page'/>

            <h1 className='h1_Secondary'>How do I create an account?</h1>
            <h2>Step by Step Instruction</h2>
            <StepOne/>
            <Desc center>Download the app on your smartphone (Click the download button below)</Desc>
            <a rel="noreferrer noopener" target="_blank" href='https://join.bisonapp.com/jnca45'><Button
                secondary>Download</Button></a>
            <StepTwo/>
            <Desc center>After downloading the App, create your account</Desc>
            <Banner src={img1} alt="register" />
            <Desc> Next step is to click "Switch To Real Money" and go to video verification. Verification is in
                English. You need to wait e few minutes for call.</Desc>
            <h1>Video Verification Help</h1>
            <Desc>1. Enter the code in app, then check in everything and wait for call.</Desc>
            <Desc>2. Consultant will introduce his self and ask you about your full name.</Desc>
            <Desc>3. Consultant will ask you to confirm your personal information, when he will stop talking say "I
                confirm"</Desc>
            <Desc>4. He/She will ask you to look straight to camera and he will take you a photo</Desc>
            <Desc>Next He/She will ask you to put your ID to camera.</Desc>

            <Desc> 5. Consultant will ask you to show second document in my case It was bank statement. On the document
                must be your home address and date.</Desc>
            <StepThree/>
            <Desc>Use <b>HAPPY5</b> code to get extra 5€ go to lower right corner and  click redeem code. </Desc>
            <Desc>Now you didn't use the code you need to deposit 25€ € to get 10€ bonus. (You can withdraw it later)</Desc>
            <Banner src={img2} alt="deposit money"/>
            <StepFour/>
            <Desc>To get 10€ Bonus we need to have at least 50€ Trade Volume. What it mean?</Desc>
            <Desc>You need to BUY Bitcoin for 50€ and sell it until you get notification about the Bonus. (11-12 times sell and buy any crypto for all your  5€ bonus</Desc>
            <Banner src={img3} alt='dashboard'/>
            <Desc>Invite your Friends to get more money. For Every invited friend you'll get 10€. Good Luck!</Desc>
        <Banner src={dollars} alt='dollars'/>
        </OfferDescription>
    )
};

export default Bison;