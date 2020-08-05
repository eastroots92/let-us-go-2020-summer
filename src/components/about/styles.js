import styled from "styled-components";

export default {
  Section: styled.section`
    padding: 54px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    @media only screen and (min-width: 450px) {
      padding: 100px 24px;
    }
    @media only screen and (min-width: 768px) {
      padding: 140px 48px;
      max-width: 768px;
      margin: 0 auto;
      flex-direction: row;
    }  
    @media only screen and (min-width: 1120px) {
      max-width: 920px;
    }
 `,
  ContentsWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    
    @media only screen and (min-width: 768px) {
      flex: 0 0 50%;
      justify-content: center;
      align-items: flex-start;
      padding-right: 32px;
    }
  `,
  Title: styled.h2`
    font-size: 1.875rem;
    font-weight: 800;
    font-family: 'Gilroy', sans-serif;
    letter-spacing: 1px;
    color: #000000;
    margin-bottom: 2.5rem;
  `,
  Contents: styled.p`
    word-break: keep-all;
    font-size: 1rem;
    line-height: 1.25;
    color: #000000;
    text-align: center;
    
    @media only screen and (min-width: 768px) {
      text-align: left;
    }
  `,
 Image: styled.img`
   width: 100%;
   border-radius: 14px;
   box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.04);
   
   @media only screen and (min-width: 768px) {
     width: 50%; 
     flex: 0 0 50%;
   }
 `,
}
