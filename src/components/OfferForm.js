import React, {useState} from 'react';
import {StyledForm, StyledCloseButton} from "./CardForm";
import styled  from "styled-components"
import Button from "./Button";

const CustomStyledForm = styled(StyledForm)`
position: absolute;
top:0;
left:50%;
transform: ${({isModalOpen})=>isModalOpen? "translate(-50%,-250%) ": "translate(-50%,10%)"};
transition: 1s ease-in-out;
`


const OfferForm = () => {

    const [isModalOpen,setModalState] = useState(true)
    const [formData, setFormData] = useState({price:"", name:"", logo: "", time: "10 min", age: "true",  kyc: "true", width:"",height:"",code: "",promoUrl:"",cardType:"CardData" })

    const toggleModal = () =>{
        if(!isModalOpen) {

            setModalState(!isModalOpen)
        } else {
            setModalState(!isModalOpen);
        }
    }

    const updateInputField = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {

    }

    return (
        <>
        <CustomStyledForm onSubmit={onSubmit} isModalOpen={isModalOpen} >
            <h2>Create Offer</h2>
            <StyledCloseButton onClick={toggleModal} />

            <label>Choose a card type

            </label>
            <label>
                Money to get:
                <input type="text" name="price" value={formData.price} onChange={updateInputField} />
            </label>
            <label>
                Promotion name:
                <input type="text" name="name" value={formData.name} onChange={updateInputField} />
            </label>
            <label>
                Logo url:
                <input type="text" name="logo" value={formData.logo} onChange={updateInputField} />
            </label>
            <label>
                Time required (min):
                <input type="text" name="time" value={formData.time} onFocus={(e)=> e.target.select()} onChange={updateInputField} />
            </label>
            <label>
                Is it 18+ app/site?
                <select >
                    <option name="age" value={true} >Yes</option>
                    <option name="age" value={false}>No</option>
                </select>
            </label>
            <label>
                Is KYC is required?
                <select >
                    <option  name="kyc" value={true} >Yes</option>
                    <option  name="kyc" value={false}>No</option>
                </select>
            </label>
            <label>
                Logo Width:
                <input type="text" name="width" value={formData.width} onChange={updateInputField} />
            </label>
            <label>
                Logo Height:
                <input type="text" name="height" value={formData.height} onChange={updateInputField} />
            </label>

            {formData.cardType==="CardRoulettes"?
                (
                    <>
                        <label>
                            Your Code:
                            <input type="text" name="code" value={formData.code} onChange={updateInputField} />
                        </label>
                        <label>
                            Ref link:
                            <input type="text" name="promoUrl" value={formData.promoUrl} onChange={updateInputField} />
                        </label>
                    </>
                )
                :
                null
            }

            <button  onClick={toggleModal}>Create Card</button>
        </CustomStyledForm>
            <Button secondary onClick={toggleModal} >Create Offer</Button>

        </>
    );
};

export default OfferForm;