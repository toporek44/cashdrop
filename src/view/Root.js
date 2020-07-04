
import React,{useState} from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import RealMoney from "./RealMoney";
import Roulettes from "./Roulettes";
import Airdrops from "./Airdrops";
import Curve from "./Offers/Curve";
import Bison from "./Offers/Bison";
import Brave from "./Offers/Brave";
import styled from 'styled-components'
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {ReactComponent as ArrowUp} from "../assets/icons/arrowup.svg";
import CoinList from "./Offers/CoinList";
import Morpher from "./Offers/Morpher";
import Azimo from "./Offers/Azimo";
import firebase from "../firebase";
import Form from "../components/Form";
require("dotenv").config({path: ".env"});



const handleScrollTop = () => {
    window.scrollTo(0, 0);
}

const StyledArrowUp = styled(ArrowUp)`
cursor: pointer;
position: fixed;
bottom: 10px;
right: 10px;

&:hover{
background-color:rgba(36,255,233,0.4);
}
`


const Root = () => {

        return (
            <>
                <BrowserRouter>
                    <>
                        <ScrollToTop/>
                            <GlobalStyle/>

                                <Header/>
                                <Switch>
                                    <Route exact path="/" component={RealMoney}/>
                                    <Route exact path="/Roulettes" component={Roulettes}/>
                                    <Route path="/Airdrops" component={Airdrops}/>
                                    <Route path='/Curve' component={Curve}/>
                                    <Route path='/Bison' component={Bison}/>
                                    <Route path='/Brave' component={Brave}/>
                                    <Route path='/CoinList' component={CoinList}/>
                                    <Route path='/Morpher' component={Morpher}/>
                                    <Route path='/Azimo' component={Azimo}/>


                                </Switch>
                        <StyledArrowUp onClick={handleScrollTop}/>
            <Form />
                                <Footer/>
                    </>
                </BrowserRouter>

            </>
        );

}

export default Root;
