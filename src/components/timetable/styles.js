import styled from "styled-components";

export default {
  Section: styled.section`
    padding: 54px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #222222;
    
    @media only screen and (min-width: 450px) {
      padding: 100px 24px;
    }
    @media only screen and (min-width: 768px) {
      padding: 140px 36px;
    }
  `,
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    @media only screen and (min-width: 768px) {
      max-width: 768px;
      margin: 0 auto;
    }
  `,
  Title: styled.h2`
    font-size: 1.875rem;
    font-weight: 800;
    font-family: 'Gilroy', sans-serif;
    letter-spacing: 1px;
    color: #f5f5f5;
    margin-bottom: 2rem;
  `,
}
