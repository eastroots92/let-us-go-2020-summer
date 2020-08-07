import styled from "styled-components";

export default {
  Section: styled.section`
    padding: 54px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    
    @media only screen and (min-width: 450px) {
      padding: 100px 24px;
    }
    @media only screen and (min-width: 768px) {
      padding: 140px 0;
      max-width: 768px;
      margin: 0 auto;
    }
 `,
  Wrap: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    
    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  `,
  Title: styled.h2`
    font-size: 1.875rem;
    font-weight: 800;
    font-family: 'Gilroy', sans-serif;
    letter-spacing: 1px;
    color: #000000;
    margin-bottom: 1.5rem;
  `,
}
