import React, { useEffect, useRef } from "react"
import S from './styles';
import iconKakao from '../../resources/kakaotalk.svg';
import iconMail from '../../resources/mail.svg';
import iconRightArrow from '../../resources/arrow.svg';
import VanillaTilt from "vanilla-tilt";
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

export const JoinUsItem = ({ item, index }) => {
  const { type, title, description, link } = item;
  const typeIcon = type === 'kakao' ? iconKakao : iconMail;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    })
  }, [])

  return (
    <S.Item
      href={link}
      ref={tilt}
      target='_blank'
      data-sal="slide-up"
      data-sal-delay={ (index + 1) * 150 }
      data-sal-duration="600"
      data-sal-easing="ease"
      onClick={ GAClickEvent('조인어스_버튼', GA_ACTION.CLICK, type) }
    >
      <S.IconWrap>
        <S.Icon src={typeIcon} alt={`${type} icon`} />
        <S.Icon src={iconRightArrow} alt='right arrow icon' />
      </S.IconWrap>
      <S.Title>{title}</S.Title>
      <S.Description dangerouslySetInnerHTML={{__html: description}} />
    </S.Item>
  )
}
