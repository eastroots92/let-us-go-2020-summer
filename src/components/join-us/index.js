import React from 'react';
import S from './styles';
import { JoinUsItem } from "../join-us-item"

const joinUsList = [
  {
    type: 'kakao',
    title: 'OPEN KAKAOTALK',
    description: 'iOS 개발자들과 함께 어울리며 서로의<br/>지식을 공유하고 소통하는 오픈카톡 입니다.',
    link: 'https://open.kakao.com/o/gyLape',
  }, {
    type: 'email',
    title: 'MAIL',
    description: 'let us: GO! 활동문의 및 후원을 원하신다면<br/>언제든 메일을 보내주세요.',
    link: 'mailto:keywindow@naver.com',
  },
]

export const JoinUs = () => (
  <S.Section>
    <S.Title
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      JOIN US
    </S.Title>
    <S.Wrap>
      { joinUsList.map((item, index) => <JoinUsItem item={item} index={index} key={item.title} />) }
    </S.Wrap>
  </S.Section>
)
