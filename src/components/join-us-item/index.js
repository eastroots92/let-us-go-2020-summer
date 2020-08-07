import React from 'react';
import S from './styles';
import iconKakao from '../../resources/kakaotalk.svg';
import iconMail from '../../resources/mail.svg';
import iconRightArrow from '../../resources/arrow.svg';

export const JoinUsItem = ({item}) => {
  const { type, title, description, link } = item;
  const typeIcon = type === 'kakao' ? iconKakao : iconMail;

  return (
    <S.Item href={link}>
      <S.IconWrap>
        <S.Icon src={typeIcon} alt={`${type} icon`} />
        <S.Icon src={iconRightArrow} alt='right arrow icon' />
      </S.IconWrap>
      <S.Title>{title}</S.Title>
      <S.Description dangerouslySetInnerHTML={{__html: description}} />
    </S.Item>
  )
}
