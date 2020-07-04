import React, {useEffect, useState} from "react";
import Heading from "../components/Heading";
import icon from '../assets/icons/drop.png'
import Card, {CardWrapper} from '../components/Card'
import firebase from "../firebase/firebase";

const Airdrops = () => {
    const [card,setCard] = useState([])

    useEffect(()=>{
        // const unsubscribe = firebase
        firebase.firestore()
            .collection("CardAirdrops")
            .onSnapshot((snapshot => {
                const newCard = snapshot.docs.map((doc)=> ({
                    id:doc.id,
                    ...doc.data()
                }))
                setCard(newCard)
            }))
        // return() => unsubscribe()

    }, [])

    return(
  <>
    <Heading>
        Catch Your Crypto Now

        <img src={icon} alt=""/>
    </Heading>
    <CardWrapper>
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>

        {card.map(({price, name, logo, time, age, availability,width, height,kyc})=>(
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
)};
export default Airdrops;
