import React, {useEffect, useState} from 'react';
import firebase from "../firebase/firebase";
import Button from "../components/Button";
import CardForm from "../components/CardForm";
import styled from 'styled-components'
import {device} from "../assets/device";
import OfferForm from "../components/OfferForm"

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

const AdminPanel = () => {



    return (
        <Wrapper>
            <h2>Admin Panel</h2>
            <ButtonsSection>
                <Button secondary onClick={() => firebase.auth().signOut()}>Sign out</Button>
                <CardForm />
                <OfferForm  />
            </ButtonsSection>

        </Wrapper>
    );
};

export default AdminPanel;
