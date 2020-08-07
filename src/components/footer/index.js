import React from 'react';
import S from './styles';

export const Footer = () => (
  <S.Footer>
    <S.Link href='https://iosdevkor.github.io/let_us_go_2019_fall_review/' target='_blank'>
      지난 let us: Go! 보기
    </S.Link>
    <S.Contents>
      Ⓒ let us: Go! iOS Developers Korea<S.Break/>
      { ` All rights reserved` }
    </S.Contents>
  </S.Footer>
)
