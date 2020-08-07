import React from 'react';
import S from './styles';

export const SpeakerItem = ({ speaker, index  }) => {
  const { name, company, profile, email, link, summary } = speaker;

  return (
    <S.Wrapper
      data-sal="slide-up"
      data-sal-delay={ (index + 1) * 100 }
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      <S.Image
        src={profile}
        alt={`발표자 ${name}`}
        data-sal="slide-up"
        data-sal-delay={ (index + 1) * 150 }
        data-sal-duration="600"
        data-sal-easing="ease"
      />
      <S.ContentsWrap>
        <S.NameWrap>
          <S.Name>
            {name}
          </S.Name>
          <S.Company>{company}</S.Company>
        </S.NameWrap>
        <S.Summary>{summary}</S.Summary>
      </S.ContentsWrap>
    </S.Wrapper>
  )
}
