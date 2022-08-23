import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Poppins', sans-serif;
    }

    a{
        padding: 0;
        margin: 0;
    }

    &::-webkit-scrollbar {
            width: 8px;              
    }

    &::-webkit-scrollbar-track {
         background: #fff;
       
                
    }

    &::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;    
    border-radius: 20px;     
    }

    &::-webkit-scrollbar-thumb:hover {
            background-color: #295074;    
        }
`;




export default GlobalStyle