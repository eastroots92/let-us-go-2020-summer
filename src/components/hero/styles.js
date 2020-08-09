import styled, { keyframes } from "styled-components"
import { aniBounce, aniSpin, aniMoveX, aniMoveY } from "./animation"

export default {
  Header: styled.header`
    width: 100%;
    height: 100vh;
    background: #222222;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    overflow: hidden;
    
    @media only screen and (min-width: 450px) {
      align-items: center;
    }
  `,
  SubTitle: styled.p`
    font-size: 1.125rem;
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    color: #f5f5f5;
    margin-bottom: 1.25rem;
    margin-top: 5vh;
    
    @media only screen and (min-width: 1024px) {
      font-size: 1.88rem;
      margin-bottom: 1rem;
    }
  `,
  Title: styled.h1`
    font-size: 2.75rem;
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 2px;
    word-break: keep-all;
    color: #4affcf;
    margin-bottom: 0.5rem;
    text-align: center;
    z-index: 5;
    
    @media only screen and (min-width: 450px) {
      margin: 2px 0 6px;
    }
    
    @media only screen and (min-width: 1024px) {
      font-size: 4.44rem;
      margin-bottom: 0.6rem;
    }
  `,
  Description: styled.p`
    font-size: 1.375rem;
    font-weight: normal;
    font-style: oblique;
    letter-spacing: 3px;
    color: #f5f5f5;
    margin-bottom: 2rem;
    z-index: 5;
    
    @media only screen and (min-width: 1024px) {
      font-size: 1.77rem;
    }
  `,
  Contents: styled.p`
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25;
    z-index: 5;
    color: #f5f5f5;
    margin-bottom: 0.625rem;
    margin-top: 10vh;
    
    @media only screen and (min-width: 1024px) {
      font-size: 1.33rem;
    }
  `,
  SubContents: styled.p`
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.25;
    z-index: 5;
    color: #a8fae4;
    
    @media only screen and (min-width: 1024px) {
      font-size: 1.11rem;
    }
  `,
  BadgeMask: styled.img`
    width: 103px;
    height: 77px;
    display: block;
    position: absolute;
    will-change: top, left;
    top: 0;
    left: 0;
    z-index: 0;
    transform: translateZ(0);
    animation: ${aniMoveX('103px')} 3.5s linear 0s infinite alternate, ${aniMoveY('77px')} 4s linear 0s infinite alternate,  ${aniSpin} 6s linear 0s infinite;
    
    @media only screen and (min-width: 1024px) {
      width: 183px;
      height: 135px;
      animation: ${aniMoveX('183px')} 6s linear 0s infinite alternate, ${aniMoveY('135px')} 7s linear 0s infinite alternate,  ${aniSpin} 10s linear 0s infinite;
    }
  `,
  BadgeSwift: styled.img`
    width: 89px;
    height: 77px;
    display: block;
    position: absolute;
    will-change: bottom, left;
    bottom: 0;
    left: 0;
    z-index: 0;
    animation: ${aniMoveX('89px')} 5s linear 0s infinite alternate, ${aniMoveY('77px', 'bottom')} 3.8s linear 0s infinite alternate,  ${aniSpin} 8s linear 0s infinite;
  
    @media only screen and (min-width: 1024px) {
      width: 150px;
      height: 130px;
      animation: ${aniMoveX('150px')} 8s linear 0s infinite alternate, ${aniMoveY('130px', 'bottom')} 7s linear 0s infinite alternate,  ${aniSpin} 12s linear 0s infinite;
    }
  `,
  BadgeStopUs: styled.img`
    width: 115px;
    height: 121px;
    display: block;
    position: absolute;
    will-change: top, right;
    top: 0;
    right: 0;
    z-index: 0;
    animation: ${aniMoveX('115px', 'right')} 3s linear 0s infinite alternate, ${aniMoveY('121px')} 3.8s linear 0s infinite alternate,  ${aniSpin} 5.5s linear 0s infinite;
    
    @media only screen and (min-width: 1024px) {
      width: 191px;
      height: 205px;
      animation: ${aniMoveX('191px', 'right')} 6s linear 0s infinite alternate, ${aniMoveY('205px')} 7.6s linear 0s infinite alternate,  ${aniSpin} 9s linear 0s infinite;
    }
  `,
  BadgeDG: styled.img`
    display: none;
    position: absolute;
    will-change: bottom, right;
    bottom: 0;
    right: 0;
    z-index: 0;

    @media only screen and (min-width: 1024px) {
      display: block;
      width: 190px;
      height: 220px;
      animation: ${aniMoveX('190px', 'right')} 8s linear 0s infinite alternate, ${aniMoveY('220px', 'bottom')} 10s linear 0s infinite alternate,  ${aniSpin} 11s linear 0s infinite;
    }
  `,
  BadgeHJ: styled.img`
    display: none;
    position: absolute;
    will-change: top, right;
    bottom: 0;
    left: 0;
    z-index: 0;

    @media only screen and (min-width: 1024px) {
      display: block;
      width: 182px;
      height: 245px;
      animation: ${aniMoveX('182px')} 10s linear 0s infinite alternate, ${aniMoveY('245px', 'bottom')} 6s linear 0s infinite alternate,  ${aniSpin} 10s linear 0s infinite;
    }
  `,
  BadgeJS: styled.img`
    display: none;
    position: absolute;
    will-change: top, right;
    top: 0;
    right: 0;
    z-index: 0;

    @media only screen and (min-width: 1024px) {
      display: block;
      width: 209px;
      height: 215px;
      animation: ${aniMoveX('209px', 'right')} 8s linear 0s infinite alternate, ${aniMoveY('215px')} 9s linear 0s infinite alternate,  ${aniSpin} 9s linear 0s infinite;
    }
  `,
  ArrowWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    position: absolute;
    bottom: 20vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    
    @media only screen and (min-width: 1024px) {
      bottom: 16vh;
    }
  `,
  DownArrow: styled.img`
    margin-top: 8px;
    width: 24px;
    height: 12px;
    animation: ${aniBounce} 0.5s infinite alternate;
  `,
};

