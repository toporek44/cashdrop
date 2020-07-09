import React, {useEffect, useState} from "react";
import Heading from "../components/Heading";
import icon from '../assets/icons/drop.png'
import Card, {CardWrapper} from '../components/Card'
import  {addSnapshot} from "../firebase/firebase";

const Airdrops = () => {
    const [card,setCard] = useState([])

    useEffect(()=>{
    addSnapshot("CardAirdrops", setCard)
    }, [])

    return(
  <>
    <Heading>
        Catch Your Crypto Now

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
)};
export default Airdrops;
