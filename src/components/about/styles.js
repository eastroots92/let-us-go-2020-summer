import styled from "styled-components";

export default {
  Section: styled.section`
    padding: 100px 16px;
    
    @media only screen and (min-width: 450px) {
      padding: 140px 24px;
    }
 `,
  ContentsWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  `,
  Title: styled.h2`
    
  `
}
