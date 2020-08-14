import styled,{css} from "styled-components";
import {device} from "../assets/device";

const Button = styled.button`
text-align: center;
text-decoration: none;
position: absolute;
top:-17px;
left:50%;
transform: translate(-50%);
border:2px solid #1AD9D9;
width:140px;
height: 40px;
background-color: #fff;
color:#5BD6CA;
font-weight: 700;
font-size: 2rem;
padding: 1rem 1.2rem;
cursor: pointer;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;


a{
  text-decoration: none;
  display: block;
  color:#fff;
  width:100%;
  height: 100%;
  }
&:after {
    background: #1AD9D9;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 210;
  }


&:hover {
  &:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  &:focus{
  outline-color: #1AD9D9;
  
  }
  
}

${({secondary})=>secondary && css`
background: transparent;
color:#fff;
width:${({width})=> width? width : "200px"};
height:${({height})=> height? height : "50px"};
border:2px solid #fff;
position: relative;
top:inherit;
left:inherit;
transform: inherit;
margin:   ${({m0})=> m0? "0px" : " 1rem .8rem 0rem .8rem"};
@media ${device.mobileL} {
margin:  ${({m0})=> m0? "0px" : "2rem 1rem 4rem 1rem"};

}


&:after {
    background: #fff;
 
  }
`}

  
  &:focus{
  outline-color: #1AD9D9;

  }
`

export default Button;