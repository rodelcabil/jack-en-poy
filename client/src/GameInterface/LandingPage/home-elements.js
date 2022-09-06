import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`

   height: 100vh;
   background: #fff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;

   .title{
    
    margin-bottom: 20px;
    @media screen and (max-width: 700px){
         
            width: 100%;
        }
   }

   .logo{
        height: 150px;
        margin-bottom: 20px;

        @media screen and (max-width: 700px){
         
            width: 100%;
        }
   }

   @media screen and (max-width: 700px){
         
         padding: 10px;
        }
`;

export const PlayButton = styled(Link)`

    background: #FBCA1F;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 25px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    color: black;

    &:hover{
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em;
    }

    &:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em;
    }

`