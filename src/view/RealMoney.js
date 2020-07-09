import React, {useEffect, useState} from "react";
import Card from '../components/Card'
import Heading from "../components/Heading";
import icon from "../assets/icons/free.png";
import {CardWrapper} from "../components/Card";
import  {addSnapshot} from "../firebase/firebase";



function RealMoney() {
    const [card,setCard] = useState([])

    useEffect(()=>{
       addSnapshot("CardData", setCard)
    }, [])

    console.log(card.map(({name, price }) => price + name))

  return (
    <>

        <Heading >
            Take Some Extra Bucks For
            <img src={icon} alt=""/>
        </Heading>
        <CardWrapper>
            {card.map(({price, name, logo, time, age,width, height,kyc})=>(
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
                />
                ))}

        </CardWrapper>

    </>
  );
}

export default RealMoney;
