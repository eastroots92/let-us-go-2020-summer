import React from 'react';
import S from './styles';
import { SpeakerItem } from "../speaker-item"
import unnyoungIcon from '../../resources/unnnyong.jpeg';
import hyunhoIcon from '../../resources/lee.png';
import yagomIcon from '../../resources/ya.png';
import johnnyIcon from '../../resources/Johnny.png';
import gomtigimIcon from '../../resources/gom.png';
import nosujinIcon from '../../resources/no.jpg';
import dogilIcon from '../../resources/do.png';
import genetoryIcon from '../../resources/genetory.png';
import sungIcon from '../../resources/sung.png';
import anyIcon from '../../resources/any.jpeg';
import jangIcon from '../../resources/jang.png';

const speakerList = [
  {
    name: '야곰',
    company: '야곰',
    profile: yagomIcon,
    blog: 'https://blog.yagom.net',
    link: 'https://yagom.net',
    summary: '안녕하세요, 야곰입니다.',
  }, {
    name: 'Johnny',
    company: 'Coupang',
    profile: johnnyIcon,
    email: 'johnnyyun@coupang.com',
    summary: '',
  }, {
    name: 'unnnyong',
    company: '',
    profile: unnyoungIcon,
    email: 'unnnyong@gmail.com',
    git: 'https://github.com/unnnyong',
    instagram: 'https://www.instagram.com/unnnyong/',
    twitter: 'https://www.twitter.com/unnnyong',
    summary: '애플워치로 지하철 타는 일상을 꿈꿉니다 😌',
  }, {
    name: '곰튀김',
    company: 'n.code',
    profile: gomtigimIcon,
    email: 'iamchiwon@gmail.com',
    git: 'https://github.com/iamchiwon',
    blog: 'https://iamchiwon.github.io/',
    youtube: 'https://www.youtube.com/channel/UCsrPur3UrxuwGmT1Jq6tkQw',
    summary: '리얼리즘 프로그래머',
  }, {
    name: '이현호',
    company: 'wadiz',
    profile: hyunhoIcon,
    email: 'mizzking75@gmail.com',
    git: 'https://github.com/M1zz',
    blog: 'https://dev200ok.blogspot.com/',
    summary: '노래하는 iOS개발자 입니다',
  }, {
    name: '노수진',
    company: 'Grab Financial Group',
    profile: nosujinIcon,
    link: ' https://soojin.ro',
    git: 'https://github.com/nsoojin ',
    summary: '싱가폴에서 그랩페이를 개발하고 있습니다.',
  }, {
    name: '도길참새',
    company: '',
    profile: dogilIcon,
    email: 'cokce@naver.com',
    summary: 'Hello World! 세상을 배워가는 중입니다.',
  }, {
    name: 'Genetory',
    company: 'OP.GG',
    profile: genetoryIcon,
    email: 'imgenetory@gmail.com',
    summary: '전적검색은 OP.GG',
  }, {
    name: '엉덩숭아',
    company: '비바리퍼블리카',
    profile: sungIcon,
    summary: '최신기술을 놓치는게 괴로운 개발자입니다.',
  }, {
    name: 'AnyObject',
    company: '비바리퍼블리카',
    profile: anyIcon,
    summary: '개발자라는 직업이 존재하는 한 계속 할 겁니다.',
  }, {
    name: 'Clint Jang',
    company: '아파트너',
    profile: jangIcon,
    email: 'jang.wangsu@gmail.com',
    blog: 'https://medium.com/@jang.wangsu',
    git: 'https://github.com/ClintJang',
    summary: 'Swift 개발이 좋아요',
  }
]

export const Speakers = () => (
  <S.Section>
    <S.Title
      id='speakers'
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      Speakers
    </S.Title>
    <S.Wrap>
      { speakerList.map((speaker, index) => (<SpeakerItem speaker={speaker} index={index} key={speaker.name} />))}
    </S.Wrap>

  </S.Section>
)
