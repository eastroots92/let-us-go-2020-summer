import styled from "styled-components";

export default {
  Item: styled.a`
    width: 100%;
    max-width: 375px;
    border-radius: 16px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    padding: 16px 8px 22px 8px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    transform-style: preserve-3d;
    
    & + & {
      margin-top: 8px;
    }
    
    @media only screen and (min-width: 768px) { 
      & + & {
       margin: 0 16px;
      }
    }
  `,
  IconWrap: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    transform: translateZ(20px);
  `,
  Icon: styled.img`
    width: 44px;
    height: 44px;
  `,
  Title: styled.h4`
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: 0.5rem;
    transform: translateZ(25px);
    padding: 0 8px;
  `,
  Description: styled.p`
    word-break: keep-all;
    font-size: 0.875rem;
    line-height: 1.43;
    font-weight: normal;
    color: #000000;
    transform: translateZ(15px);
    padding: 0 8px;
  `
}
