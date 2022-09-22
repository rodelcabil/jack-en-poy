import styled from 'styled-components';

export const CardContainer = styled.div`
   display: flex;
   background: transparent;
   padding: 40px 60px;
   width: 400px;
   justify-content: center;
   flex-direction: column;
   align-items: center;

   .player{
    font-size: 20px;
   }

   img{
    height: 200px;
    width: 200px;
  
   }

    @media screen and (max-width: 700px){
         padding: 10px;
        width: 100%;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 20px;

    .circle{
        border-radius: 50px;
        height: 45px;
        width: 45px;
        box-shadow: -5px -6px 5px 0px rgba(92,85,85,0.75) inset;
        -webkit-box-shadow: -5px -6px 5px 0px rgba(92,85,85,0.75) inset;
        -moz-box-shadow: -5px -6px 5px 0px rgba(92,85,85,0.75) inset;
    }

  
`