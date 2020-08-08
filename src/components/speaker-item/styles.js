import styled from "styled-components";

export default {
  Wrapper: styled.div`
    width: 100%;
    max-width: 375px;
    padding: 16px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  `,
  Image: styled.img`
    width: 92px;
    height: 92px;
    border-radius: 16px;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.16);
  `,
  ContentsWrap: styled.div`
    width: calc(100% - 46px);
    min-height: 120px;
    padding: 16px 16px 16px 60px;
    margin-left: -46px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
    border-radius: 14px;
  `,
  NameWrap: styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 12px;
  `,
  Name: styled.h3`
    font-size: 1rem;
    line-height: 0.88;
    color: #000000;
    margin-right: 4px;
  `,
  Company: styled.p`
    font-size: 0.75rem;
    line-height: 1.33;
    color: #acacac;
  `,
  Summary: styled.p`
    word-break: keep-all;
    font-size: 0.75rem;
    color: #454545;
    line-height: 1.33;
  `,
  LinkWrap: styled.div`
    display: flex;
  `,
  Link: styled.a`
    width: 18px;
    height: 18px;
    
    & + & {
      margin-left: 4px;
    }
  `,
}
