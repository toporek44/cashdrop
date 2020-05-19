import React from 'react';
import OfferDescription, {Banner, Desc, Logo} from "../../components/OfferDescription";
import {CardRealMoney} from "../../assets/CardContent";
import img from "../../assets/img/azimo form.jpg";
import img2 from "../../assets/img/azimo transfer.jpg";
import {ReactComponent as StepOne} from "../../assets/icons/one.svg";
import Button from "../../components/Button";
import {ReactComponent as StepTwo} from "../../assets/icons/two.svg";
import {ReactComponent as StepThree} from "../../assets/icons/three.svg";
import {ReactComponent as StepFour} from "../../assets/icons/four.svg";
import {ReactComponent as StepFive} from "../../assets/icons/five.svg";
import {ReactComponent as StepSix} from "../../assets/icons/six.svg";

import dollars from "../../assets/img/dollars.png";

const Azimo = () => {
    return (
        <OfferDescription>
            <h1>About</h1>
            <Logo src={CardRealMoney[4].logo} alt={CardRealMoney[4].name}/>
            <Desc>Azimo is the faster, safer way to send money to more than 200
                countries and territories worldwide. They offer really favorable rate of
                exchange. Azimo founded in 2012 and they have reached over 1
                milion users.
            </Desc>
            <h1 className="h1_Secondary">Requirements</h1>
            <ul>
                <li>Revolut or account in other bank from UK</li>
                <li>Account in bank from country you live</li>
                <li>90£ on Revolut or other Bank in UK.</li>
            </ul>

            <h1 className='h1_Secondary'>How do I create an account?</h1>
            <h2>Step by Step Instruction</h2>
            <StepOne/>
            <Desc center >Click the button below and click create personal account.</Desc>
            <a rel="noreferrer noopener" target="_blank" href='https://azimo.app.link/invite?code=MICHALP225'><Button
                secondary>Create Account</Button></a>
            <StepTwo/>
            <Desc center><b>Fill in a form like this!</b></Desc>
            <Desc center><b>IT'S IMPORTANT TO SEND MONEY FROM UK</b></Desc>
            <Banner src={img} alt="register" />
            <StepThree/>
            <Desc center>Fill in your profile</Desc>
            <Desc center>Enter your birth date and to enter address I recommend this website.</Desc>
            <a href="https://www.fakeaddressgenerator.com/World/uk_address_generator/" className='link' target='_blank' rel="noreferrer noopener">FakeAddressGenerator.com</a>
            <StepFour/>
            <Desc center>Next step is to click <b>"Make a transfer"</b></Desc>
            <Desc>Set your country currency and choose “Bank Deposit” and complete the recipient data. </Desc>
            <StepFive/>
            <Desc>Now you need to send 100£ to yourself. When you type 100 in the form you should see the text "Saving 10 GBP off your
                transfer” </Desc>
            <Banner src={img2} alt="transfer"/>
            <Desc>If you will use Revolut, you need to create new <b>VIRTUAL</b> card in Revolut, because
                old card will be decline. </Desc>
            <StepSix/>
            <Desc>Now you can promote this website and get 10 GBP discount for your another transfer, which mean you'll get free 10£. Enjoy!</Desc>
            <Banner src={dollars} alt="dollars"/>
        </OfferDescription>
    );
};

export default Azimo;