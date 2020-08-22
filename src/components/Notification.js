import React, { useContext } from 'react';
import styled from "styled-components";
import {ReactComponent as Info} from "../assets/icons/info.svg";
import {NotificationContext} from "../view/AdminPanel";


const Wrapper = styled.div`
position: fixed;
top:10%;
min-width: 200px;
padding: 0 1.5rem;
right:30px;
height: 45px;
background-color: #91ea6f;
box-shadow: 2px 2px 10px -8px #212121;
display: flex;
justify-content: space-around;
align-items: center;
color:#fff;
filter: ${({active}) => active ? "opacity(1) " : "opacity(0)"};
transform: ${({active}) => active ? "translateX(0px)" : "translateX(300px)"} ;
z-index: 999;
transition: all 1s ease-in-out;
font-size: 1.4rem;

svg{
width:20px;
height: 20px;
margin-right: 2rem;
}

&:hover{
cursor: pointer;
}
`



const Notification = ({children}) => {

 const {active,setActive} = useContext(NotificationContext)


    return (

           <Wrapper active={active} onClick={()=>setActive(false)}>
               <Info />
               {children}
           </Wrapper>
    );
};
export default Notification

