import React from "react";
import Heading from "../components/Heading";
import icon from '../assets/icons/drop.png'

import Card, {CardWrapper} from '../components/Card'
import {CardAirdrops} from "../assets/CardContent";

const Airdrops = () => (
  <>
    <Heading>
        Catch Your Crypto Now

        <img src={icon} alt=""/>
    </Heading>
    <CardWrapper>
        {CardAirdrops.map(({price, name, logo, time, age, availability,width, height,kyc})=>(
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
export default Airdrops;
