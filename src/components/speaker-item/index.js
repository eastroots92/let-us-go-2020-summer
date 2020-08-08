import React from 'react';
import S from './styles';
import emailIcon from '../../resources/mail.svg';
import linkIcon from '../../resources/link.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

export const SpeakerItem = ({ speaker, index  }) => {
  const { name, company, profile, email, git, summary } = speaker;

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
        <S.LinkWrap>
          <S.Link
            href={ `mailto:${email}` }
            target='_blank'
            onClick={ GAClickEvent('스피커_이메일_링크', GA_ACTION.CLICK, name) }
          >
            <img src={emailIcon} alt="이메일 아이콘" width='18px' height='18px' />
          </S.Link>
          { git &&
            <S.Link
              href={ git }
              target='_blank'
              onClick={ GAClickEvent('스피커_깃헙_링크', GA_ACTION.CLICK, name) }
            >
              <img src={linkIcon} alt="링크 아이콘" width='18px' height='18px' />
            </S.Link>
          }
        </S.LinkWrap>
      </S.ContentsWrap>
    </S.Wrapper>
  )
}
