import S from './styles';
import React from "react";
import badgeIcon1 from '../../resources/badge.svg';
import badgeIcon2 from '../../resources/badge2.svg';
import badgeIcon3 from '../../resources/mask.png';

export const Hero = () => {
  return (
    <S.Header>
      <S.SubTitle>2020 SUMMER</S.SubTitle>
      <S.Title>
        iOS DEVELOPERS' SEMINAR
      </S.Title>
      <S.Description>LIVE STREAMING</S.Description>
      <S.Contents>
        2020년 8월 15일 13:00~18:00
      </S.Contents>
      <S.Badge1 src={badgeIcon1} />
      <S.Badge2 src={badgeIcon2} />
      <S.Badge3 src={badgeIcon3} />
    </S.Header>
  )
}
