import React, {createContext, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {ReactComponent as Arrow} from "../assets/icons/arrow.svg";
import {useFormik} from 'formik';
import * as Yup from "yup"
import {SidebarContext} from "../view/Offers/Offer";


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width:300px;
background-color: #fff;
box-shadow: 0 4px 10px -6px #212121;
position: fixed;
top:0;
left:0;
transform:${({sidebarActive}) => sidebarActive ? "translateX(0)" : "translateX(-240px)"};
transition: all .7s ease-in-out;
`
const StyledArrow = styled(Arrow)`
width:30px;
height: 30px;
position:absolute;
top:15px;
left:10px;
fill: #13b7b7;
transform:${({sidebarActive}) => sidebarActive ? "translateX(0)" : "rotate(180deg) translateX(-245px)"};
transition: all .7s ease-in-out;
z-index: 100;

&:hover{
cursor: pointer;
}

`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: start;
height: 80%;
width:80%;
opacity: ${({sidebarActive}) => sidebarActive ? 1 : 0};
transition: all .8s ease-in-out;
`

const StyledLabel = styled.label`
color:#13b7b7;
font-size: 1.6rem;
`
const StyledField = styled.input`
border:none;
width:100%;
height: 40px;
border-bottom: 2px solid #13b7b7;
margin: 1rem 0;
color: #13b7b7;
font-size: 1.7rem;
padding: 0 1rem;
transform-origin: 50%;
transition: all .4s ease-in-out;
&:focus {
outline: none;
transform: scale(0.97);
}
`
const TextArea = styled.textarea`
height: 100px;
width: 100%;
max-width: 100%;
border:2px solid #13b7b7;
background: transparent;
margin: 1rem 0;
font-size: 1.7rem;
color:#13b7b7;
`
const Button = styled.button`
background: transparent;
min-width:100px;
min-height: 35px;
border:2px solid #13b7b7;
color: #13b7b7;
font-size: 1.7rem;
transition: .2s all ease-in-out;
margin-top: 2rem;

&:hover{
background: #13b7b7;
color:#fff;
transition: .2s all ease-in-out;
cursor: pointer;
}
`

export const StyledErrorMessage = styled.div`
position:relative;
top:-8px;
color:#de6363;
font-size: 1.4rem;
text-align: center;
margin:0 auto;
`


const Sidebar = () => {
    const {offerData, setOfferData} = useContext(SidebarContext)
    const {OFFER_DESCRIPTION, REFERRAL_LINK, STEP_CONTENT, BANNER} = {
        OFFER_DESCRIPTION: "offerDescription",
        REFERRAL_LINK: "refLink",
        STEP_CONTENT: "stepContent",
        BANNER: "banner",

    }
    const [sidebarActive, setSidebarActive] = useState(true)
    const {handleSubmit, getFieldProps, errors, touched, values} = useFormik({

        //change this names
        // set context
        //take a state from card
        initialValues: {
            offerDescription: "",
            refLink: "",
            stepContent: "",
            banner: "",
        },

        validationSchema: Yup.object({
            OFFER_DESCRIPTION: Yup.string().required("Required"),
            REFERRAL_LINK: Yup.string().required("Required"),
            STEP_CONTENT: Yup.string().required("Required"),
            BANNER: Yup.string().required("Required"),
        }),


        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    })

    useEffect(() => {
        console.log(values)
    }, [])
    return (
        <Wrapper sidebarActive={sidebarActive}>
            <StyledArrow sidebarActive={sidebarActive} onClick={() => setSidebarActive(!sidebarActive)}/>
            <StyledForm sidebarActive={sidebarActive} onSubmit={handleSubmit}
                        onChange={()=>  setOfferData(
                            [
                                {values}
                            ]
                        )
                        }

            >


                <StyledLabel htmlFor={OFFER_DESCRIPTION}>Offer Description</StyledLabel>
                <StyledField
                    type="text"
                    name={OFFER_DESCRIPTION}
                    id={OFFER_DESCRIPTION}
                    {...getFieldProps(OFFER_DESCRIPTION)}


                />
                {errors.OFFER_DESCRIPTION && touched.OFFER_DESCRIPTION &&
                <StyledErrorMessage>{errors.OFFER_DESCRIPTION}</StyledErrorMessage>}
                <StyledLabel htmlFor={REFERRAL_LINK}>Your reflink</StyledLabel>
                <StyledField
                    type="text"
                    name={REFERRAL_LINK}
                    id={REFERRAL_LINK}
                    {...getFieldProps(REFERRAL_LINK)}
                />
                {errors.REFERRAL_LINK && touched.REFERRAL_LINK &&
                <StyledErrorMessage>{errors.REFERRAL_LINK}</StyledErrorMessage>}
                <StyledLabel htmlFor={STEP_CONTENT}>Type Instruction</StyledLabel>
                <TextArea
                    type="text"
                    name={STEP_CONTENT}
                    id={STEP_CONTENT}
                    {...getFieldProps(STEP_CONTENT)}

                />
                {errors.STEP_CONTENT && touched.STEP_CONTENT &&
                <StyledErrorMessage>{errors.STEP_CONTENT}</StyledErrorMessage>}

                <StyledLabel htmlFor={BANNER}>Banner Image URL</StyledLabel>
                <StyledField
                    type="text"
                    name={BANNER}
                    id={BANNER}
                    {...getFieldProps(BANNER)}

                />
                {errors.BANNER && touched.BANNER && <StyledErrorMessage>{errors.BANNER}</StyledErrorMessage>}


                <Button secondary type="submit">
                    Submit
                </Button>
            </StyledForm>
        </Wrapper>
    );
};

export default Sidebar;