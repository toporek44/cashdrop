import React, {useEffect, useState} from "react";
import Card from '../components/Card'
import Heading from "../components/Heading";
import icon from "../assets/icons/free.png";
import {CardWrapper} from "../components/Card";
import  {addSnapshot} from "../firebase/firebase";
import {CARD_TYPES} from "../constants";
import * as firebase from "firebase";



function RealMoney() {
    const [card,setCard] = useState([])

    useEffect(()=>{
        addSnapshot("Cards", setCard, CARD_TYPES.realMoney)
    }, [])


  return (
    <>

        <Heading >
            Take Some Extra Bucks For
            <img src={icon} alt="" />
            <h6>More and more companies to promote their services giving away money for free to encourage user to start using their app or open an bank account. On this website you can find all these promotions with clear and easy instructions to do.</h6>

        </Heading>
        <CardWrapper>
            {card.map(({price, name, logo, time, age,width, height,kyc,id})=>(
                <Card
                price={price}
                name={name}
                logo={logo}
                time={time}
                age={age}
                width={width}
                height={height}
                key={name}
                kyc={kyc}
                id={id}
                />
                ))}

        </CardWrapper>

    </>
  );
}

export default RealMoney;
