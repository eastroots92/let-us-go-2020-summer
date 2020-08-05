import React from 'react';
import S from './styles';

export const TimetableItem = ({ item }) => {
  const { label, title, badge } = item;

  return (
    <S.Item>
      <S.Label>{label}</S.Label>
      <S.ContentsWrap>
        <S.Title>{title}</S.Title>
        <S.Badge>{badge}</S.Badge>
      </S.ContentsWrap>
    </S.Item>
  )
}
