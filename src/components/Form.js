import React, {useState} from 'react';
import firebase from "../firebase";
import styled  from "styled-components"

const StyledForm = styled.form`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;

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

    return (
        <StyledForm onSubmit={onSubmit}>
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
            <Button>Send</Button>
        </StyledForm>
    );
};

export default Form;