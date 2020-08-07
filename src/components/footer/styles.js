import styled from "styled-components";

export default {
  Footer: styled.footer`
    width: 100%;
    background: #222222;
    padding: 24px 16px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media only screen and (min-width: 450px) {
      padding: 56px 16px;
    }
  `,
  Link: styled.a`
    font-size: 0.875rem;
    font-weight: bold;
    color: #4affcf;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 36px;
  `,
  Contents: styled.p`
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1px;
    text-align: center;
    color: #f5f5f5;
  `,
  Break: styled.br`
    @media only screen and (min-width: 768px) {
      display: none;
    }
  `,
}
