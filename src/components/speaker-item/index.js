import React from 'react';
import S from './styles';

export const SpeakerItem = ({ speaker }) => {
  const { name, company, profile, email, link, summary } = speaker;

  return (
    <S.Wrapper>
      <S.Image src={profile} alt={`발표자 ${name}`} />
      <S.ContentsWrap>
        <S.NameWrap>
          <S.Name>{name}</S.Name>
          <S.Company>{company}</S.Company>
        </S.NameWrap>
        <S.Summary>{summary}</S.Summary>
      </S.ContentsWrap>
    </S.Wrapper>
  )
}
