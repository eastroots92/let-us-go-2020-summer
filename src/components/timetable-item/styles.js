import styled from "styled-components";

export default {
  Item: styled.li`
    display: flex;
    padding: 4px;
    width: 100%;
    align-items: flex-start;
    
    @media only screen and (min-width: 768px) {
      padding: 8px 4px;
    }
  `,
  Label: styled.p`
    padding-top: 1.125rem;
    color: #f5f5f5;
    padding-right: 1.5rem;
  `,
  ContentsWrap: styled.div`
    width: 100%;
    padding: 24px 18px;
    border-radius: 14px;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.04);
    background-color: #f5f5f5;
  `,
  Title: styled.h4`
    font-size: 1rem;
    line-height: 1.25;
    word-break: keep-all;
    font-weight: normal;
    color: #000000;
    margin-bottom: 14px;
  `,
  Badge: styled.span`
    border-radius: 12px;
    background-color: #a8fae4;
    font-size: 0.875rem;
    line-height: 0.875rem;
    font-weight: normal;
    color: #000000;
    padding: 0 6px;
  `,
}
