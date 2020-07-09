import React, {useEffect, useState} from "react";
import Heading from "../components/Heading";
import icon from "../assets/icons/clover.png";
import Card, {CardWrapper} from '../components/Card'
import {addSnapshot} from "../firebase/firebase";
const pageType = 'Roulette';


const Roulettes = () => {

    const [card,setCard] = useState([])

    useEffect(()=>{
 addSnapshot("CardRoulettes", setCard)

    }, [])


    return (


    <>
        <Heading>
            Try Your Luck or Withdraw Skins
            <div>for the CSGO players</div>
            <img src={icon} alt=""/>

        </Heading>
        <CardWrapper >
            {card.map(({price, name, logo, time, age,width, height,code, promoUrl,cardType})=>(
                <Card
                    pageType={pageType}
                    price={price}
                    name={name}
                    logo={logo}
                    time={time}
                    age={age}
                    width={width}
                    height={height}
                    code={code}
                    key={name}
                    promoUrl={promoUrl}
                    cardType={cardType}
                />
            ))}
        </CardWrapper>
    </>
)};
export default Roulettes;
