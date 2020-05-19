import React, {useState, useRef} from 'react';
import styled from 'styled-components'
import {ReactComponent as CloseBtn} from "../assets/icons/close_button.svg";
import curve from "../assets/logos/curve.png";
import {CardRealMoney} from "../assets/CardContent";

const Wrapper = styled.div`
        height: 400px;
        width:300px;
        background-color: #fff;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 100;
        box-shadow: 2px 2px 20px -12px #000;
        
        form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
            label{
            color:#000;
            }
        }
        `


const StyledClosedBtn = styled(CloseBtn)`
position: absolute;
top:1rem;
right:1rem;
width:20px;
height: 20px;
cursor:pointer;
`

const StyledInput = styled.input`
margin-bottom: 2rem;
`
const Modal = () => {
    const addItem = () =>{
        CardRealMoney.push(
            {
                price: "5€",
                name: 'Curve',
                logo: curve,
                time: '10 min',
                age: false,
                availability: true,
                kyc: false,
                width: '190px',
                height:'46px',
            })
    }



    const wrapper = useRef(null)
    const [isModalClosed,setModalClosed] = useState(false);
    const [inputContent, setInputContent] = useState("")

    const openModal = () =>{
        if(isModalClosed) {
            setModalClosed(false)
            wrapper.current.style.display = "none"
        } else {
            setModalClosed(true);
            wrapper.current.style.display = "flex"
        }

        console.log(isModalClosed)
    }
const input =(e)=>{
        setInputContent(e.target.value)
    console.log(inputContent)
}


    return (
        <>
            <button onClick={addItem}>Open</button>
        <Wrapper ref={wrapper}>
            <StyledClosedBtn onClick={openModal}/>
            <form action="">
                <label htmlFor="price">Price</label> <StyledInput type="text"  onChange={input}/>
                <StyledInput type="text"/>
                <StyledInput type="text"/>
            </form>
           
        </Wrapper>
            </>
    );
};

export default Modal;