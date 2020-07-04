import React, {useEffect, useState} from "react";
import Heading from "../components/Heading";
import icon from "../assets/icons/clover.png";
import Card, {CardWrapper} from '../components/Card'
import firebase from "../firebase/firebase";
const pageType = 'Roulette';


const Roulettes = () => {

    const [card,setCard] = useState([])

    useEffect(()=>{
        // const unsubscribe = firebase
        firebase.firestore()
            .collection("CardRoulettes")
            .onSnapshot((snapshot => {
                const newCard = snapshot.docs.map((doc)=> ({
                    id:doc.id,
                    ...doc.data()
                }))
                setCard(newCard)
            }))
        // return() => unsubscribe()

    }, [])


    return (


    <>
        <Heading>
            Try Your Luck or Withdraw Skins
            <div>for the CSGO players</div>
            <img src={icon} alt=""/>

        </Heading>
        <CardWrapper >
            {card.map(({price, name, logo, time, age, availability,width, height,code})=>(
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
)};
export default Roulettes;
