import React from 'react';
import S from './styles';

export const TimetableItem = ({ item }) => {
  const { label, title, badge } = item;

  return (
    <S.Item
      data-sal="slide-up"
      data-sal-delay= "100"
      data-sal-duration="600"
      data-sal-easing="ease"
    >
      <S.Label>{label}</S.Label>
      <S.ContentsWrap>
        <S.Title>{title}</S.Title>
        { badge && <S.Badge>{badge}</S.Badge> }
      </S.ContentsWrap>
    </S.Item>
  )
}
