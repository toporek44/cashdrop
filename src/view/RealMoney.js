import React from "react";
import Card from '../components/Card'
import Heading from "../components/Heading";
import icon from "../assets/icons/free.png";
import {CardWrapper} from "../components/Card";
import {CardRealMoney} from "../assets/CardContent";



function RealMoney() {


  return (
    <>

        <Heading >
            Take Some Extra Bucks For
            <img src={icon} alt=""/>
        </Heading>
        <CardWrapper>
            {CardRealMoney.map(({price, name, logo, time, age, availability,width, height,kyc})=>(
                <Card
                price={price}
                name={name}
                logo={logo}
                time={time}
                age={age}
                availability={availability}
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
