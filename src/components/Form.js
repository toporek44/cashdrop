import React, {useEffect, useRef, useState} from 'react';
import firebase from "../firebase/firebase";
import styled  from "styled-components"
import {ReactComponent as CloseButton} from "../assets/icons/close.svg";

const StyledForm = styled.form`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
width:280px;
position: absolute;
top:50%;
left:50%;
//transform: translate(-50%,-50%);
background-color: #5BD6CA;
padding: 4rem 2rem 2rem 2rem;
z-index: 1000;
transform: translate(-50%,-250%);
transition: 1s ease-in-out;


label{
display: flex;
justify-content: center;
flex-direction: column;


    input{
    border:none;
    margin:0.7rem 0 1rem 0;
    font-size: 1.5rem;
    color: #5BD6CA;
    width:200px;
    height: 30px;
    padding: 1.3rem;
    transition: .3s ease-in-out;

        &:focus{
        outline: none;
        border: 2px solid #1e8e81;
        transition: .3s ease-in-out;
        }
    }
}
`
const StyledCloseButton = styled(CloseButton)`
position: absolute;
top:15px;
right:15px;
width:20px;
height: 20px;

&:hover{
path{
fill: rgba(255,3,21,0.72);

}
cursor:pointer;
}
`
const Button =styled.button`
background-color: transparent;
color:#fff;
width: 80px;
height: 30px;
border: 2px solid #fff;
transition: .3s ease-in-out;

&:hover{
cursor: pointer;
background-color: #fff;
transition: .3s ease-in-out;
color:#5BD6CA;
}

`



const Form = () => {
    const form = useRef(null)
    const [isModalOpen,setModalState] = useState(true)
    const [price, setPrice] = useState("")
    const [name,setName] = useState("")
    const [logo, setLogo] = useState("")
    const [time, setTime] = useState("")
    const [age, setAge] = useState(true)
    const [availability, setAvailability] = useState(true)
    const [kyc, setKyc] = useState(true)
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")


    const onSubmit = (e) =>{
        e.preventDefault()
        if(price === "") return
        firebase.firestore().collection("CardData").add({
            price,
            name,
            logo,
            time,
            age,
            availability,
            kyc,
            width,
            height
        })
            .then(()=>{
                setPrice("")
                setName("")
                setLogo("")
                setTime("")
                setAge(true)
                setAvailability(true)
                setKyc(true)
                setWidth("")
                setHeight("")
            })
    }

    const toggleModal = () =>{
        const currForm =form.current
        if(!isModalOpen) {
            setModalState(true)
            // currForm.style.display = "none"
            currForm.style.transform= "translate(-50%,-250%)"
        } else {
            setModalState(false);
            currForm.style.display = "flex"
            currForm.style.transform= "translate(-50%,-50%)"
        }
        console.log(isModalOpen)

    }
    return (
        <>
        <StyledForm onSubmit={onSubmit} ref={form}>
            <StyledCloseButton onClick={toggleModal}/>
            <label>
                Price:
                <input type="text" value={price} onChange={(e => setPrice(e.currentTarget.value))} />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={(e => setName(e.currentTarget.value))} />
            </label>
            <label>
                LogoUrl:
                <input type="text" value={logo} onChange={(e => setLogo(e.currentTarget.value))} />
            </label>
            <label>
                Time:
                <input type="text" value={time} onChange={(e => setTime(e.currentTarget.value))} />
            </label>
            <label>
                Age:
                <input type="text" value={age} onChange={(e => setAge(e.currentTarget.value))} />
            </label>
            <label>
                Availability:
                <input type="text" value={availability} onChange={(e => setAvailability(e.currentTarget.value))} />
            </label>
            <label>
                KYC:
                <input type="text" value={kyc} onChange={(e => setKyc(e.currentTarget.value))} />
            </label>
            <label>
                Width:
                <input type="text" value={width} onChange={(e => setWidth(e.currentTarget.value))} />
            </label>
            <label>
                Height:
                <input type="text" value={height} onChange={(e => setHeight(e.currentTarget.value))} />
            </label>
            <Button onClick={toggleModal}>Send</Button>
        </StyledForm>
            <button onClick={toggleModal}>Open</button>
            </>
    );
};

export default Form;