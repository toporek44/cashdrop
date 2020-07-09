import React, {useState} from 'react';
import firebase from "../firebase/firebase";
import styled  from "styled-components"
import Button from "./Button";
import {ReactComponent as CloseButton} from "../assets/icons/close.svg";
import Card, {Wrapper as CardComponent} from "./Card";
import {device} from "../assets/device";
import {ReactComponent as PreviewIcon} from "../assets/icons/preview.svg";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
top:50%;
left:50%;
transform: ${({isModalOpen})=>isModalOpen? "translate(-50%,-250%) ": "translate(-50%,-50%)"};
transition: 1s ease-in-out;
z-index: 800;


${CardComponent}{
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


@media ${device.tablet}{
flex-direction:row;
}
`

const StyledForm = styled.form`
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


@media ${device.tablet}{
display: none;
}
`



const Form = () => {
    const [isModalOpen,setModalState] = useState(true)
    const [isCardVisible, setCardVisibility] = useState(false)
    const [formData, setFormData] = useState({price:"", name:"", logo: "", time: "10 min", age: "true",  kyc: "true", width:"",height:"",code: "",promoUrl:"",cardType:"CardData" })


    const onSubmit = (e) =>{
        e.preventDefault()
        if(formData.price === "") return
        firebase.firestore().collection(formData.cardType).add({
          ...formData
        })
            .then(()=>{
                setFormData({
                    ...formData,
                    price:"",
                    name:"",
                    logo: "",
                    time: "10 min",
                    age: "true",
                    kyc: "true",
                    width:"",
                    height:"",
                    code: "",
                    promoUrl:""
                })

            })
    }

    const toggleModal = () =>{
        if(!isModalOpen) {
            setModalState(true)
            setCardVisibility(false)
        } else {
            setModalState(false);
            setCardVisibility(true)

        }
    }




    const updateInputField = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const updateSelectState = e =>{
        setFormData({
            ...formData,
           [e.target.options[e.target.selectedIndex].attributes[0].value] : e.target.selectedOptions[0].value
        })
        console.log( )
    }
    return (
        <>
        <Wrapper  isModalOpen={isModalOpen}>
        <StyledForm onSubmit={onSubmit}  >
            <StyledCloseButton onClick={toggleModal} />

            <label>Choose a card type

            <select  onChange={e=>  setFormData({...formData, cardType: e.currentTarget.selectedOptions[0].value})}>
                <option value="CardData" >RealMoney</option>
                <option value="CardRoulettes">Roulettes</option>
                <option value="CardAirdrops">Airdrops</option>
            </select>
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
                <select onChange={updateSelectState}>
                    <option name="age" value={true} >Yes</option>
                    <option name="age" value={false}>No</option>
                </select>
            </label>
            <label>
                Is KYC is required?
                <select onChange={updateSelectState}>
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
            <StyledPreviewButton  onClick={()=>setCardVisibility(!isCardVisible)}/>
        </StyledForm>

                {
                   isCardVisible? (
                    <Card
                        price= {formData.price}
                        name= {formData.name}
                        logo= {formData.logo}
                        time= {formData.time}
                        age= {formData.age}
                        kyc={formData.kyc}
                        width= {formData.width}
                        height={formData.height}
                        code={formData.code}
                        promoUrl={formData.promoUrl}
                        cardType={formData.cardType}
                    />
                ): null

            }

            {}
            {window.onresize= ()=> 768 < window.innerWidth ?  setCardVisibility(true) : setCardVisibility(false)}
            </Wrapper>
        <Button secondary onClick={toggleModal} >Create New Card</Button>
</>
);
};

export default Form;