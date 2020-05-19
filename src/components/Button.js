import styled,{css} from "styled-components";

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
line-height: 14px;
cursor: pointer;
overflow: hidden;

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
}

${({secondary})=>secondary && css`
background: transparent;
color:#fff;
width:200px;
height: 50px;
border:2px solid #fff;
position: relative;
top:inherit;
left:inherit;
transform: inherit;
margin: 2rem 0 4rem 0;


&:after {
    background: #fff;
 
  }
`}


`

export default Button;