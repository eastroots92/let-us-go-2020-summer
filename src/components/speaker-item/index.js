import React from 'react';
import S from './styles';
import email2Icon from '../../resources/mail2.svg';
import linkIcon from '../../resources/link.svg';
import youtubeIcon from '../../resources/youtube.svg';
import gitIcon from '../../resources/git.svg';
import twitterIcon from '../../resources/twitter.png';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

export const SpeakerItem = ({ speaker, index  }) => {
  const { name, company, profile, email, blog, link, twitter, youtube, git, summary } = speaker;

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
          { git &&
          <S.Link
            href={ git }
            target='_blank'
            onClick={ GAClickEvent('스피커_깃헙_링크', GA_ACTION.CLICK, name) }
          >
            <img src={gitIcon} alt="링크 아이콘" width='18px' height='18px' />
          </S.Link>
          }
          {
            email && <S.Link
              href={ `mailto:${email}` }
              target='_blank'
              onClick={ GAClickEvent('스피커_이메일_링크', GA_ACTION.CLICK, name) }
            >
              <img src={email2Icon} alt="이메일 아이콘" width='18px' height='18px' />
            </S.Link>
          }
          {
            link && <S.Link
              href={ link }
              target='_blank'
              onClick={ GAClickEvent('스피커_링크_링크', GA_ACTION.CLICK, name) }
            >
              <img src={linkIcon} alt="링크 아이콘" width='18px' height='18px' />
            </S.Link>
          }
          {
            youtube && <S.Link
              href={ youtube }
              target='_blank'
              onClick={ GAClickEvent('스피커_유튜브_링크', GA_ACTION.CLICK, name) }
            >
              <img src={youtubeIcon} alt="유튜브 아이콘" width='18px' height='18px' />
            </S.Link>
          }
          {
            blog && <S.Link
              href={ blog }
              target='_blank'
              onClick={ GAClickEvent('스피커_블로그_링크', GA_ACTION.CLICK, name) }
            >
              <img src={linkIcon} alt="블로그 아이콘" width='18px' height='18px' />
            </S.Link>
          }
          {
            twitter && <S.Link
              href={ twitter }
              target='_blank'
              onClick={ GAClickEvent('스피커_트위터_링크', GA_ACTION.CLICK, name) }
            >
              <img src={twitterIcon} alt="트위터 아이콘" width='18px' height='18px' />
            </S.Link>
          }
        </S.LinkWrap>
      </S.ContentsWrap>
    </S.Wrapper>
  )
}
