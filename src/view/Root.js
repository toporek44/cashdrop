import React, {useContext, useEffect, useState} from "react";
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
import {ReactComponent as ArrowUp} from "../assets/icons/arrowup.svg";
import CoinList from "./Offers/CoinList";
import Morpher from "./Offers/Morpher";
import Azimo from "./Offers/Azimo";
import {AuthProvider} from "../firebase/Auth";
import SingUp from "../components/SingUp";
import Login from "../components/Login";
import PrivateRoute from "../firebase/PrivateRoute";
import AdminPanel from "./AdminPanel";
import {addSnapshot} from "../firebase/firebase";
import Offer from "./Offers/Offer";
import ScrollToTop from "../components/ScrollToTop";

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
const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
`



const Root = () => {

    // const routes = [
    //     {path: "/", name: "Home", Component: RealMoney},
    //     {path: "/Projects", name: "Projects", Component: Roulettes},
    //     {path: "/Contact", name: "Contact", Component: Airdrops},
    //     {path: "/CV", name: "CV", Component: CV},
    //
    // ]
    const [path, setPath] = useState([])

    useEffect(()=>{
        addSnapshot("OfferPages", setPath,"Test", "offerName")
    }, [])
        return (
            <>
                <AuthProvider>
                <BrowserRouter>
                    <Wrapper>
                <ScrollToTop/>
                            <GlobalStyle/>
                                <Header/>

                        <Switch>

                            {
                                path.map( ( { path, offerName } ) => (
                                    <Route exact path={path} key={offerName} >
                                        <Offer/>
                                    </Route>
                                ))
                            }
                            {/*<Route path={path} component={Offer} />*/}
                            <Route exact path="/" component={RealMoney}/>
                            <Route exact path="/Roulettes" component={Roulettes}/>
                            <Route path="/Airdrops" component={Airdrops}/>
                            <Route path='/Curve' component={Curve}/>
                            <Route path='/Bison' component={Bison}/>
                            <Route path='/Brave' component={Brave}/>
                            <Route path='/CoinList' component={CoinList}/>
                            <Route path='/Morpher' component={Morpher}/>
                            <Route path='/Azimo' component={Azimo}/>
                            <Route path='/Login' component={Login}/>
                            <Route path='/SingUp' component={SingUp}/>
                            <PrivateRoute path='/Admin' component={AdminPanel}/>

                        </Switch>
                        <StyledArrowUp onClick={handleScrollTop}/>
                    </Wrapper>
                    <Footer/>
                </BrowserRouter>
                </AuthProvider>
            </>
        );

}

export default Root;
