import React from 'react';
import S from './styles';
import { TimetableItem } from "../timetable-item"

const timetableList = [
  {
    label: '13:00',
    title: '개회사',
    badge: ['Kuu'],
  },
  {
    label: '13:15',
    title: 'Hello, SwiftUI!',
    badge: ['야곰'],
  },
  {
    label: '13:50',
    title: '패널토크 : 외국의 개발자 생활은 어떻습니까?',
    badge: ['unnnyong', '노수진', '도길참새'],
  },
  {
    label: '14:50',
    title: '역전의 명수 (Inversions)',
    badge: ['곰튀김'],
  },
  {
    label: '15:20',
    title: 'Cocoa pod, Carthage, SPM 중 무엇을 쓰시나요?',
    badge: ['이현호'],
  },
  {
    label: '15:50',
    title: 'Apple Pay 개발을 못해도 어떻게 하는지 아는 건 죄가 아니잖아',
    badge: ['unnnyoung'],
  },
  {
    label: '16:20',
    title: '패널토크 : 신입 개발자, 이런 사람 찾아요.',
    badge: ['Genetory', '엉덩숭아', 'AnyObject', '클린트'],
  },
  {
    label: '17:20',
    title: '폐회사',
    badge: [],
  },
];

export const Timetable = () => (
  <S.Section>
    <S.Title
      id='timetable'
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      TIMETABLE
    </S.Title>
    <S.Wrap>
      {timetableList.map((item, index) => (<TimetableItem item={item} index={index} key={item.title} />))}
    </S.Wrap>
  </S.Section>
)
