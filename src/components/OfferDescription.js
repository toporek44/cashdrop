import React from 'react';
import styled from 'styled-components'
import {device} from "../assets/device";


const Wrapper = styled.div`
width:90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin:0 auto;

.link{
text-decoration: underline;
color:#fff;
font-size: 2.2rem;
margin-bottom: 1.5rem;
}
@media ${device.tablet}{
width:80%;
}

ul{
font-size: 2.2rem;
}
h1{
font-size:5rem;
color:#fff;
margin-bottom: 0;
text-align: center;

}
.h1_Secondary{
font-size: 3rem;

    @media ${device.tablet}{
    font-size: 6rem;
    }
}
h2{
text-align: center;
}

svg{
width:80px;
height: 80px;
margin:2rem 0;

    @media ${device.tablet}{
    width:150px;
    height: 150px;
    margin:2rem 0 4rem 0;
    
    }
}

`
export const Desc = styled.p`
margin:2rem auto 3rem auto;
color:#fff;
text-align: ${({center})=> center ? 'center' : 'left'};
font-size:2rem;


@media ${device.tablet}{
font-size: 2.2rem;
width:70%;
}

`
export const Banner = styled.img`
width:${({width})=> width || '100%'};
height: ${({height})=> height || '100%'};
margin-bottom: 2rem;
   @media ${device.tablet}{
   width:300px;

}
`

export const Logo = styled.img` 
    width:250px;
    margin: 2rem 0 5rem 0;
    
    @media ${device.tablet}{
    width:300px;
}
`





const OfferDescription = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default OfferDescription;