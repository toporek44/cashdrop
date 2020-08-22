import React, {useEffect, useState} from "react";
import Heading from "../components/Heading";
import icon from '../assets/icons/drop.png'
import Card, {CardWrapper} from '../components/Card'
import  {addSnapshot} from "../firebase/firebase";
import {CARD_TYPES} from "../constants";

const Airdrops = () => {
    const [card,setCard] = useState([])

    useEffect(()=>{
    addSnapshot( "Cards", setCard, CARD_TYPES.airdrops )
    }, [])

    return(
  <>
    <Heading>
        Catch Your Crypto Now

        <img src={icon} alt=""/>
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
)};
export default Airdrops;
