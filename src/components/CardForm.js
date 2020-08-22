import React, {useContext, useEffect, useRef, useState} from 'react';
import firebase from "../firebase/firebase";
import styled from "styled-components"
import Button from "./Button";
import {ReactComponent as CloseButton} from "../assets/icons/close.svg";
import Card, {Wrapper as CardComponent} from "./Card";
import {device} from "../assets/device";
import {ReactComponent as PreviewIcon} from "../assets/icons/preview.svg";
import {useHistory} from "react-router";
import {NotificationContext} from "../view/AdminPanel";
import Notification from "./Notification";
import { useFormik } from "formik";
import {StyledErrorMessage} from "../components/Sidebar"
import * as Yup from "yup"
import {CARD_TYPES} from "../constants";


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
position: absolute;
top:0%;
left:50%;
transform: ${({isModalOpen}) => isModalOpen ? "translate(-50%,-250%) " : "translate(-50%,10%)"};
transition: 1s ease-in-out;
z-index: 998;
margin-bottom: 5rem;


@media ${device.tablet}{
flex-direction:row;
}

${CardComponent} {
     position: absolute;
     top:50%;
     transform: translateY(-50%);
     z-index: 1000;
        @media ${device.tablet}{
            position: relative;
            top: initial;
            transform: initial;
       }
}


`

export const StyledForm = styled.form`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
width:280px;
background-color: #5BD6CA;
padding: 4rem 2rem 2rem 2rem;
z-index: 1000;
position: relative;

button{
    background-color: transparent;
    color:#fff;
    width: 100px;
    height: 33px;
    border: 2px solid #fff;
    transition: .3s ease-in-out;
    
        &:hover{
          color: #5BD6CA;
          background-color: #fff;
          transition: .3s ease-in-out;
          cursor: pointer;
        }
    }

label{
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
width:200px;
    
    select{
        margin:0.7rem 0 1rem 0;
        background-color: transparent;
        height: 33px;
        border: 2px solid #fff;
        color: #fff;
        padding: 0 2rem;
        font-size: 1.3rem;
        
            &:hover{
            cursor: pointer;
            }
            
        option{
        background-color: #5BD6CA;        
        }
    }
    
    input{
    border:none;
    background: none;
    border-bottom: 2px solid #fff;
    margin:0.7rem 0 1rem 0;
    font-size: 1.5rem;
    color: #ffffff;
    width:200px;
    height: 30px;
    padding: 1.3rem;
    transition: .3s ease-in-out;
    transform-origin: 50%;
    
        &:focus{
        outline: none;
        transition: .3s ease-in-out;
        transform: scale(0.97);
        }
    }
    
    
}
`
export const StyledCloseButton = styled(CloseButton)`
position: absolute;
top:12px;
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

const StyledPreviewButton = styled(PreviewIcon)`
position: absolute;
top:10px;
left:5px;
width:120px;
height: 27px;
margin:0;
cursor: pointer;
`




const CardForm = () => {
    const history = useHistory()
    const [isModalOpen, setModalState] = useState(true)
    const [isCardVisible, setCardVisibility] = useState(false)
    const select = useRef(null)
    const ageSelect = useRef(null)
    const kycSelect = useRef(null)
    const {active, setActive} = useContext(NotificationContext)

    const toggleModal = () => {
        if (!isModalOpen) {
            if(Object.keys(errors).length !== 0) return
            setModalState(true)
            setCardVisibility(false)

        } else {
            setModalState(false);
            select.current.value = CARD_TYPES.realMoney
            ageSelect.current.value = true
            kycSelect.current.value = true

        }
    }

    const { handleSubmit,errors,touched,values,handleReset, getFieldProps,setValues } = useFormik({
        initialValues:
            {
                price: "",
                name: "",
                logo: "",
                time: "10 min",
                age: "true",
                kyc: "true",
                width: 0,
                height: 0,
                code: "",
                promoUrl: "",
                cardType: CARD_TYPES.realMoney
            },

        validationSchema: (values) => Yup.object({
            price: Yup.string().required("Required"),
            name: Yup.string().required("Required"),
            logo: Yup.string().required("Required"),
            time :Yup.string().required("Required"),
            promoUrl: {...values}.cardType===CARD_TYPES.roulette?
                Yup.string().required("Required") : null,
            code: {...values}.cardType===CARD_TYPES.roulette?
                Yup.string().required("Required") : null,
            width: Yup.number().required("Required"),
            height: Yup.number().required("Required"),


        }),

        onSubmit: (values,{ setSubmitting }) => {

            firebase.firestore().collection("Cards").add({
                ...values
            })
                .then(() => {
                    setValues({
                        ...values,
                        price: "",
                        name: "",
                        logo: "",
                        time: "10 min",
                        age: "true",
                        kyc: "true",
                        width: 0,
                        height: 0,
                        code: "",
                        promoUrl: "",
                        cardType: CARD_TYPES.realMoney,

                    })

                })
            setActive(true)
            setTimeout(() => {
                    setActive(false)
                    if(values.cardType === CARD_TYPES.roulette) return
                    history.push(`/${values.name}`)

                }, 4000
            )

            setTimeout(() => {
                setSubmitting(false);
            }, 400);

            setValues({...values, cardType: CARD_TYPES.realMoney})
            toggleModal()

        }

    })




    const updateSelectState = e => {
        setValues({
            ...values,
            [e.target.options[e.target.selectedIndex].attributes[0].value]: e.target.selectedOptions[0].value
        })

    }

    return (
        <>
            {/*{active ? <Notification>Card created successful!</Notification> : null}*/}
            <Wrapper isModalOpen={isModalOpen}>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledCloseButton onClick={()=>{
                        setModalState(true)
                        setCardVisibility(false)
                        handleReset(undefined)
                    }}/>

                    <label>Choose a card type

                        <select
                            onChange={e => {
                                setValues({
                                    ...values,
                                    cardType: e.currentTarget.selectedOptions[0].value
                                })
                            }
                            }

                            onClick={()=>console.log(values)}
                            ref={select}
                        >
                            <option value={CARD_TYPES.realMoney}>RealMoney</option>
                            <option value={CARD_TYPES.roulette}>Roulettes</option>
                            <option value={CARD_TYPES.airdrops}>Airdrops</option>
                        </select>
                    </label>
                    <label>
                        Money to get
                        <input
                            type="text"
                            name="price"
                            autoComplete="off"
                            {...getFieldProps("price")}
                        />
                    </label>
                    {errors.price && touched.price && <StyledErrorMessage>{errors.price}</StyledErrorMessage>}

                    <label htmlFor="name">
                        Promotion name
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                            {...getFieldProps("name")}

                        />

                    </label>
                    {errors.name && touched.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
                    <label>
                        Logo url
                        <input
                            type="text"
                            name="logo"
                            {...getFieldProps("logo")}

                        />
                    </label>
                    {errors.logo && touched.logo && <StyledErrorMessage>{errors.logo}</StyledErrorMessage>}

                    <label>
                        Time required (min)
                        <input
                            type="text"
                            name="time"
                            {...getFieldProps("time")}

                            onFocus={(e) => e.target.select()}
                              />
                    </label>
                    {errors.time  && touched.time && <StyledErrorMessage>{errors.time}</StyledErrorMessage>}

                    <label>
                        Is it 18+ app/site?
                        <select ref={ageSelect} onChange={updateSelectState}>
                            <option name="age" value={true}>Yes</option>
                            <option name="age" value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Is KYC is required?
                        <select ref={kycSelect} onChange={updateSelectState}>
                            <option name="kyc" value={true}>Yes</option>
                            <option name="kyc" value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Logo Width:
                        <input
                            type="text"
                            name="width"
                            {...getFieldProps("width")}

                            onFocus={(e) => e.target.select()}
                        />
                    </label>
                    {errors.width && touched.width && <StyledErrorMessage>{errors.width}</StyledErrorMessage>}

                    <label>
                        Logo Height:
                        <input
                            type="text"
                            name="height"
                            {...getFieldProps("height")}

                            onFocus={(e) => e.target.select()}
                        />
                    </label>
                    {errors.height &&  touched.height && <StyledErrorMessage>{errors.height}</StyledErrorMessage>}


                    {values.cardType === CARD_TYPES.roulette ?
                        (
                            <>
                                <label>
                                    Your Code:
                                    <input
                                        type="text"
                                        name="code"
                                        {...getFieldProps("code")}
                                    />

                                </label>
                                {errors.code && touched.code && <StyledErrorMessage>{errors.code}</StyledErrorMessage>}

                                <label>
                                    Ref link:
                                    <input
                                        type="text"
                                        name="promoUrl"
                                        {...getFieldProps("promoUrl")}

                                    />

                                </label>
                                {errors.promoUrl && touched.promoUrl && <StyledErrorMessage>{errors.promoUrl}</StyledErrorMessage>}

                            </>
                        )
                        :
                        null
                    }

                    <button type="submit" onClick={handleReset}>Create Card</button>
                    <StyledPreviewButton onClick={() => setCardVisibility(!isCardVisible)}/>
                </StyledForm>

                {
                    isCardVisible && (
                        <Card
                            price= {values.price}
                            name= {values.name}
                            logo= {values.logo}
                            time= {values.time}
                            age= {values.age}
                            kyc={values.kyc}
                            width= {values.width}
                            height={values.height}
                            code={values.code}
                            promoUrl={values.promoUrl}
                            cardType={values.cardType}

                        />
                    )

                }


            </Wrapper>
            <Button secondary onClick={toggleModal}>Create New Card</Button>
        </>
    );
};

export default CardForm;