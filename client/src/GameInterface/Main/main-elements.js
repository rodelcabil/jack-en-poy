import styled from 'styled-components';

export const MainContainer = styled.div`
   display: flex;
   height: 100vh;
   background: #F0F0F0;
   padding: 60px;
   width: 100%;
   align-items: center;
   justify-content: center;
   flex-direction: column;

    .title{
        height: auto;
        width: 400px;

         @media screen and (max-width: 700px){
            width: 100%;
        }
    }

    .description{
        font-size: 25px;
    }
    .verdict{
        font-size: 30px;
        text-transform: uppercase;
    }

    .cards{
        display: flex;
        width: 400px;
        margin: auto;
        justify-content: space-between;
        margin-top: 20px;
        img{
            height: 100px;
            width: 100px;
            cursor: pointer;

             @media screen and (max-width: 700px){
                height: 90px;
                width: 90px;
            }
           
        }

        @media screen and (max-width: 700px){
           width: 100%;
            justify-content: space-around;
        }
    }

    .dialog-box{
        background: #F6FFED;
        border: 1px solid #52C41A;
        width: 600px;
       
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        
        @media screen and (max-width: 700px){
             width: 100%;
        }
    }

     @media screen and (max-width: 700px){
      padding: 10px;
       height: auto;
    }
   
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;

    h3{
        font-size: 40px;
    }

    @media screen and (max-width: 700px){
        display: block;
        margin: auto;
    }
`