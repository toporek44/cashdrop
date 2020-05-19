import React from 'react';
import OfferDescription, {Logo, Desc, Banner,} from "../../components/OfferDescription";
import {CardRealMoney} from "../../assets/CardContent";
import img from "../../assets/img/curvecard.png";
import img2 from '../../assets/img/address curve.jpg'
import img3 from '../../assets/img/curve free plan.jpg'
import img4 from '../../assets/img/curve verify.jpg'
import img5 from '../../assets/img/verification code.jpg'
import img6 from '../../assets/img/paste code.jpg'
import img7 from '../../assets/img/end.jpg'
import img8 from '../../assets/img/start.jpg'
import dollars from '../../assets/img/dollars.png'

import {ReactComponent as StepOne} from "../../assets/icons/one.svg";
import {ReactComponent as StepTwo} from "../../assets/icons/two.svg";
import {ReactComponent as StepThree} from "../../assets/icons/three.svg";
import {ReactComponent as StepFour} from "../../assets/icons/four.svg";
import {ReactComponent as StepFive} from "../../assets/icons/five.svg";
import {ReactComponent as StepSix} from "../../assets/icons/six.svg";
import Button from "../../components/Button";

const Curve = () => {
    return (
        <OfferDescription>
            <h1>About</h1>
            <Logo src={CardRealMoney[0].logo} alt={CardRealMoney[0].name}/>
            <Desc>Curve is a Mobile App that comes with it’s own debit Curve Card (Mastercard), that aims to help the
                user
                manage their finances.</Desc>
            <Desc>In a nutshell:
                The user can link all of their active credit/debit cards in one, that of the Curve Card, and manage all
                of their transactions and spending via it.</Desc>

            <Desc>Having all of your cards linked into one, allows for a better overview of your personal spending, as
                well
                as access to special benefits such as Cashback Bonuses (for retailers like Shell, BP, Lidl etc) and “Go
                Back In Time” feature.
                More info on the latter further down.</Desc>

            <Banner src={img} alt='curve card'/>

            <h1 className='h1_Secondary'>How do I create an account?</h1>
            <h2>Step by Step Instruction</h2>

            <StepOne/>
            <Desc>Sign Up Curve Bonus:
                Don’t forget to use the following Referral Code, should you end up creating an account, to earn £5 after
                completing your first purchase!</Desc>
            <Desc center>Referral Code: <b>D4KGVQZE</b></Desc>
            <a rel="noreferrer noopener" target="_blank" href='https://www.curve.com/join#D4KGVQZE'><Button secondary>Download</Button></a>

            <StepTwo/>
            <Desc>After downloading the App, following the instructions on Step 1, open the Curve app.</Desc>
            <Banner src={img8} alt='click continue'/>
            <Desc> Create a Free Curve Account
                Tap “Continue”</Desc>
            <Desc>After scrolling through the benefits, hit “Create a New Account“.</Desc>
            <Desc>Add your email.</Desc>
            <Desc>Go to the email and use the link “Log in to Curve” to open the app and complete the
                confirmation.</Desc>

            <StepThree/>
            <Desc>This is where you add your personal information. Add your mobile number, full name and address.</Desc>
            <Desc>The validation process was one of the faster I’ve ever come across since there was no delay for any
                kind of verifications from the Curve’s side.</Desc>
            <Desc>On one hand I was pretty happy since I was done very quickly, on the other it may seem a little
                alarming (for them) to accept everyone who wants to create a new account.</Desc>
            <Desc>Then again I’m no expert in those fields.</Desc>
            <Banner src={img2} alt="addres image"/>
            <Desc center>Fill in your Home Address Details</Desc>
            <StepFour/>
            <Desc>After completing Step 3, you’ll be prompted to allow or deny push notifications from the App, and also
                to add the promo code to earn your bonus.</Desc>
            <Desc>Afterwards, you get to select your Curve plan.</Desc>
            <Desc><b>Basic Blue Plan</b> (free) or Premium Black?</Desc>
            <Banner  src={img3} alt="free plan"/>

            <StepFive/>
            <Desc>The next step is password creation. After creating one, you get prompted to confirm the shipping
                address.</Desc>
            <Desc>The shipment of your card is totally free and it takes about ~10 working days for it to arrive.</Desc>

            <StepSix/>
            <Desc>In this step you can link credit or debit cards from different banks to Curve.</Desc>
            <Desc>You can link cards from any traditional brick and mortal bank and digital ones (N26, Revolut, Monese
                etc).</Desc>
            <Banner src={img4} alt={"verify image"}/>
            <Desc center>Debit/Credit Card verification in Curve</Desc>
            <Desc>After filling in your card credentials, you’ll get a validation prompt.</Desc>
            <Desc>Curve will charge a small amount in your newly linked card so that you can track the transaction,
                identify the card and link it to your account.
                Don’t worry, you’ll of course get a refund for the charges after.</Desc>
            <Desc>After the transaction is visible on your card, you’ll have to open the Mobile or Desktop app of the
                bank your applied card belongs to.
                In that transaction statement you’ll find a code that you have to copy, since it’ll be used to verify
                your card.</Desc>
            <Desc>In this specific one, a Revolut card was used, and the code was: c-Q5jtas</Desc>
            <Banner src={img5} alt="verification code"/>
            <Desc>Use this Confirmation Code to Verify a Debit/Credit Card on Curve</Desc>
            <Desc>Copied the Code? Good.
                Now go back to the app, paste it in and tap “Verify Now“.</Desc>
            <Banner src={img6} alt="paste code"/>
            <Desc>Add your Verification Code and tap "Verify Now"
                Add your Verification Code and tap “Verify Now”</Desc>
        <Banner src={img7} alt='final'/>
        <Desc>Success!
            Your card has been added and is ready to use via Curve!</Desc>
            <Desc>You can repeat the process and add as many cards as you wish to fully benefit from what Curve has to offer.</Desc>
            <Desc>Invite your friends to get more money. You'll get 5£ for ever invited person. Enjoy!</Desc>
            <Banner src={dollars} alt='dollars'/>
        </OfferDescription>

    )
};

export default Curve;