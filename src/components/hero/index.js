import S from './styles';
import React from "react";
import badgeIcon1 from '../../resources/badge.svg';
import badgeIcon2 from '../../resources/badge2.svg';
import badgeIcon3 from '../../resources/mask.png';

export const Hero = () => {
  return (
    <S.Header>
      <S.SubTitle
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        2020 SUMMER
      </S.SubTitle>
      <S.Title
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        iOS DEVELOPERS' SEMINAR
      </S.Title>
      <S.Description
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        LIVE STREAMING
      </S.Description>
      <S.Contents
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        2020년 8월 15일 13:00~18:00
      </S.Contents>
      <S.Badge1 src={badgeIcon1} />
      <S.Badge2 src={badgeIcon2} />
      <S.Badge3 src={badgeIcon3} />
    </S.Header>
  )
}
