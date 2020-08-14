import styled from "styled-components";

export default {
  Button: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 296px;
    height: 56px;
    border-radius: 28px;
    background-image: linear-gradient(157deg, #10ffc0 23%, #4affcf 35%, #0cb6e4 90%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    font-size: 1rem;
    font-weight: bold;
    line-height: 56px;
    letter-spacing: -0.08px;
    color: #222222;
    bottom: 34px;
    text-align: center;
    transition: all 150ms ease-in;
    z-index: 9999999;
    
    &:hover {
      transform: scale(1.05);
    }
    
    @media only screen and (min-width: 450px) {
      margin: 0;
      right: 40px;
      left: inherit;
    }
  `,
  Icon: styled.img`
    width: 31px;
    height: 25px;
    margin-right: 6px;
  `
}
