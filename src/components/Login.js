import React, { useCallback, useContext, useRef } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase/firebase";
import { AuthContext } from "../firebase/Auth";
import styled from "styled-components"
import {device} from "../assets/device";
import Button from "./Button";
const Wrapper = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
width:80%;
max-width: 500px;
height: 50%;
max-height: 400px;
background-color: #5BD6CA;
border:3px solid #fff;
padding: 1rem 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index: 999;




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
    transition:  outline-color .3s ease-in-out;

    @media ${device.mobileL}{
     width: 300px;
      
      }
    }

        *:focus{
        outline:  2px solid #24bcad;
        transition: outline-color .3s ease-in-out;
        }
    }
}

button{
position: relative;
left:50%;
transform: translateX(-50%);
width: 100px;
height: 33px;
margin-top: 1rem;
font-size: 1.4rem;
line-height: 16.5px;

`

const IncorrectLogin = styled.div`
color: #ff4843;
font-size: 1.2rem;
display: none;
`


const Login = ({ history }) => {
    const errorMessage = useRef(null)
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/Admin");
            } catch (error) {
                errorMessage.current.style.display = "block";
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/Admin" />;
    }

    return (
        <Wrapper>
            <h1>Log in</h1>
            <IncorrectLogin ref={errorMessage}>Incorrect Email or Password! </IncorrectLogin>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" required />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"  required/>
                </label>
                <Button  secondary  type="submit">Log in</Button>
            </form>
        </Wrapper>
    );
};

export default withRouter(Login);