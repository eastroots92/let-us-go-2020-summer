import styled from "styled-components";

export default {
  Header: styled.header`
    width: 100%;
    height: 100vh;
    background: #d8d8d8;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled.div`
    width: 219px;
    height: 62px;
    background: #b1b1b1;
    margin-bottom: 47px;
  `,
  Title: styled.h1 `
    font-size: 1.875rem;
    font-weight: 900;
    letter-spacing: -0.15px;
    color: #000000;
    margin-bottom: 0.25rem;
  `,
  SubTitle: styled.p`
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.8px;
    color: #000000;
    margin-bottom: 0.25rem;
  `,
};
