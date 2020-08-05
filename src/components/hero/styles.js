import styled from "styled-components";

export default {
  Header: styled.header`
    width: 100%;
    height: 100vh;
    background: #222222;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 1rem;
    @media only screen and (min-width: 450px) {
      align-items: center;
    }
  `,
  SubTitle: styled.p`
    font-size: 1.125rem;
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    color: #f5f5f5;
    margin-top: 10vh;
    
    @media only screen and (min-width: 450px) {
      margin-top: 0;
    }
  `,
  Title: styled.h1`
    font-size: 2.125rem;
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 2px;
    word-break: keep-all;
    color: #f5f5f5;
    margin-bottom: 0.25rem;
    
    @media only screen and (min-width: 450px) {
      margin: 2px 0 6px;
    }
  `,
  Description: styled.p`
    font-size: 1.375rem;
    font-weight: normal;
    font-style: oblique;
    letter-spacing: 3px;
    color: #4affcf;
    margin-bottom: 2rem;
  `,
  Contents: styled.p`
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25;
    color: #f5f5f5;
  `
};
