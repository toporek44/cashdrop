import React from 'react';
import styled from 'styled-components'
import {device} from '../assets/device';


const Text = styled.div`
font-size: 3rem;
color: #fff;
padding:1rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
text-shadow: 0 3px 3px #1e8e81;
 
@media ${device.tablet}{
margin:0 auto;
width:80%;
font-size:8rem;
padding: 8rem 1rem 1rem 1rem;
}

img{
height: 150px;
width: 150px;
margin:4rem 0;

@media ${device.tablet}{
    height: 250px;
    width: 250px;
    margin:4rem 0;
}
}

}
`

const Heading = ({children, icon}) => {
    return (
        <Text>
            {children}
        </Text>

    );
};

export default Heading;