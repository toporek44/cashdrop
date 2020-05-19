import {createGlobalStyle} from "styled-components";
import {device} from "../assets/device";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,500,700");

*, *::before, *::after{
    box-sizing: border-box;
}

html{
font-size:62.5%;

scroll-behavior: smooth;
::-webkit-scrollbar {
  width: 15px;
  &-track{
    background: #f1f1f1;
  }
      &-thumb{
      background: #888;
          
          &:hover{
            background: #555;
          }
      }
  }
}



body{
    font-family:'Montserrat', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    background: linear-gradient(255.24deg, #2EA499 0.12%, #4FC1B7 47.02%, #67F8EA 99.12%, rgba(47, 28, 28, 0) 158.74%, #461717 158.74%); 
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    color:#fff;
}


`;

export default GlobalStyle;
