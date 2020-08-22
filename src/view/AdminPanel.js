import React, {createContext, useEffect, useState} from 'react';
import firebase from "../firebase/firebase";
import Button from "../components/Button";
import CardForm from "../components/CardForm";
import styled from 'styled-components'
import {device} from "../assets/device";
import Notification from "../components/Notification";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ButtonsSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media ${device.mobileL}{
flex-direction:row;

}
`
export const NotificationContext = createContext()

const AdminPanel = () => {
    const [active, setActive] = useState(false)

    return (
        <Wrapper>
            <h2>Admin Panel</h2>
            <NotificationContext.Provider value={{active,setActive}}>
            <ButtonsSection>
                <Button secondary onClick={() => firebase.auth().signOut()}>Sign out</Button>
                <CardForm />
            </ButtonsSection>
                <Notification>Card created successful!</Notification>
            </NotificationContext.Provider>
        </Wrapper>
    );
};

export default AdminPanel;
