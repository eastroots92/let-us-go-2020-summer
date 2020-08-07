import React from 'react';
import S from './styles';
import { SpeakerItem } from "../speaker-item"

const speakerList = [
  {
    name: '이현호1',
    company: 'Kakao iOS Developer',
    profile: 'https://avatars3.githubusercontent.com/u/26288794?s=460&u=94472f8f72610ac0d8b6c7201d36917ba9689fa5&v=4',
    email: 'eastroots92@gmail.com',
    link: 'https://github.com/eastroots92',
    summary: '우주최강 슈퍼 울트라 개발자입니다. 지구는 물론 화성까지 진출할 예정입니다.',
  }, {
    name: '이현호2',
    company: 'Kakao iOS Developer',
    profile: 'https://avatars3.githubusercontent.com/u/26288794?s=460&u=94472f8f72610ac0d8b6c7201d36917ba9689fa5&v=4',
    email: 'eastroots92@gmail.com',
    link: 'https://github.com/eastroots92',
    summary: '우주최강 슈퍼 울트라 개발자입니다. 지구는 물론 화성까지 진출할 예정입니다.',
  }, {
    name: '이현호3',
    company: 'Kakao iOS Developer',
    profile: 'https://avatars3.githubusercontent.com/u/26288794?s=460&u=94472f8f72610ac0d8b6c7201d36917ba9689fa5&v=4',
    email: 'eastroots92@gmail.com',
    link: 'https://github.com/eastroots92',
    summary: '우주최강 슈퍼 울트라 개발자입니다. 지구는 물론 화성까지 진출할 예정입니다.',
  }, {
    name: '이현호4',
    company: 'Kakao iOS Developer',
    profile: 'https://avatars3.githubusercontent.com/u/26288794?s=460&u=94472f8f72610ac0d8b6c7201d36917ba9689fa5&v=4',
    email: 'eastroots92@gmail.com',
    link: 'https://github.com/eastroots92',
    summary: '우주최강 슈퍼 울트라 개발자입니다. 지구는 물론 화성까지 진출할 예정입니다.',
  }
]

export const Speakers = () => (
  <S.Section>
    <S.Title
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
