import { keyframes } from "styled-components"

export const aniBounce = keyframes`
 0% {
  transform: translateY(0);
 }
 100% {
   transform: translateY(5px);
 }
`;

export const aniSpin = keyframes`
  0% {
    transform: rotate(0) translateZ(0);
  }
  100% {
    transform: rotate(360deg) translateZ(0);
  }
`;


export const aniMoveX = (width, position = 'left') => keyframes`
  0% {
    ${position}: 0;
  }
  100% {
    ${position}: calc(100% - ${width});
  }
`;

export const aniMoveY = (height, position = 'top') => keyframes`
  0% {
    ${position}: 0;
  }
  100% {
    ${position}: calc(100vh - ${height});
  }
`;
