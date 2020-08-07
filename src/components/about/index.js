import React from 'react';
import S from './styles';

export const About = () => (
  <S.Section>
    <S.Wrap>
      <S.ContentsWrap>
        <S.Title>
          ABOUT
        </S.Title>
        <S.Contents>
          let us: Go!는 iOS 개발에 관심있는 모두가 모여 개발 노하우와 다양한 경험 그리고 정보를 서로 공유하고 자유롭게 소통하는 iOS 커뮤니티입니다.
          <br /><br />
          let us: Go! iOS 개발 세미나가 2020년 올해 처음 유튜브 라이브 방송으로 여러분을 찾아갑니다!
        </S.Contents>
      </S.ContentsWrap>
      <S.Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' alt='let us: Go! 2019 iOS 단체 사진' />
    </S.Wrap>
  </S.Section>
)
