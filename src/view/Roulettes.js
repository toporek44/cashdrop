import React from "react";
import Heading from "../components/Heading";
import icon from "../assets/icons/clover.png";
import Card, {CardWrapper} from '../components/Card'
import {CardRoulettes} from "../assets/CardContent";
const pageType = 'Roulette';
const Roulettes = () => (

    <>
        <Heading>
            Try Your Luck or Withdraw Skins
            <div>for the CSGO players</div>
            <img src={icon} alt=""/>

        </Heading>
        <CardWrapper >
            {CardRoulettes.map(({price, name, logo, time, age, availability,width, height,code})=>(
                <Card
                    pageType={pageType}
                    price={price}
                    name={name}
                    logo={logo}
                    time={time}
                    age={age}
                    availability={availability}
                    width={width}
                    height={height}
                    code={code}
                    key={name}

                />
            ))}
        </CardWrapper>
    </>
);
export default Roulettes;
