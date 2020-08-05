import React from 'react';
import S from './styles';
import { TimetableItem } from "../timetable-item"

const timetableList = [
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
  {
    label: '13:00',
    title: '개회사',
    badge: 'Kuu',
  },
];

export const Timetable = () => (
  <S.Section>
    <S.Title>TIMETABLE</S.Title>
    <S.Wrap>
      {timetableList.map((item) => (<TimetableItem item={item} key={item.label} />))}
    </S.Wrap>
  </S.Section>
)
